import { boostPackInfo, getBoostPackKey} from "@/lib/constants";
import redis from "@/lib/redis";
import { UserId } from "@/types/user";
import 'server-only';

/**
 * 设计：购买加油包
 * 如果已有加油包（expire存在且大于当前时间），expire + 7天，oldBalance + BOOST_PACK_CREDITS
 * 如果没有加油包，设置expire为 0 + 7天，0 + BOOST_PACK_CREDITS
 *
 * Logic: Purchase of boost pack
 * If a boost pack already exists (expire exists and is greater than the current time), extend expire by 7 days, and add BOOST_PACK_CREDITS to oldBalance
 * If no boost pack exists, set expire to current time + 7 days, and set balance to BOOST_PACK_CREDITS
 */
// todo variantId 标记的是 number 但是，传进来后，依旧不是。类型检查不是强制的？
export async function boostPack({ userId }: UserId, variantId: number) {
  const userBoostPackKey = await getBoostPackKey({ userId })
  const userBoostPack = await redis.get(userBoostPackKey) || 0

  // console.log("boostPackInfo: ", boostPackInfo)
  // console.log("variantId: ", variantId)
  // console.log("BOOST_PACK_CREDITS1: ", boostPackInfo.get(Number(variantId)))
  // console.log("BOOST_PACK_CREDITS2: ", boostPackInfo.get(Number(variantId))?.BOOST_PACK_CREDITS)

  // @ts-ignore // todo 类型检查以后再处理。python写习惯了，typescript 的类型检查需要习惯一下
  const BOOST_PACK_CREDITS = boostPackInfo.get(Number(variantId))?.BOOST_PACK_CREDITS
  // @ts-ignore
  const BOOST_PACK_EXPIRE = boostPackInfo.get(Number(variantId))?.BOOST_PACK_EXPIRE
  if (userBoostPack === 0) {
    const res = await redis.set(userBoostPackKey, BOOST_PACK_CREDITS, { ex: BOOST_PACK_EXPIRE })
    if (res === 'OK') {
      return { userId, balance: BOOST_PACK_CREDITS, expire: BOOST_PACK_EXPIRE, boostPack: 'success' }
    }
    return { userId, balance: 0, expire: 0, boostPack: 'fail' }
  }
  // 已是加油包用户，查询过期时间，计算新的过期时间，更新过期时间， todo 这里的时间可以累加，这个bug 暂时不处理
  // For existing boost pack users, query the expiration time, calculate the new expiration time, and update the expiration time.
  const oldBalance: number = await redis.get(userBoostPackKey) || 0
  const TTL = await redis.ttl(userBoostPackKey)
  const newTTL = TTL + BOOST_PACK_EXPIRE
  const newBalance = oldBalance + BOOST_PACK_CREDITS
  const res = await redis.setex(userBoostPackKey, newTTL, newBalance)
  return res === 'OK' ?
      { userId, oldBalance, newBalance, expire: newTTL, boostPack: 'success' } :
      { userId, oldBalance, newBalance: oldBalance, expire: TTL, boostPack: 'fail' }
}