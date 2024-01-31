// @/lib/membership/upgrade.ts
import { UserId } from "@/types/user";
import {getUserTotalRemainKey, MEMBERSHIP_EXPIRE, ROLES_LIMIT} from "@/lib/membership/constants"
import redis from "@/lib/redis";
import 'server-only';
import { Logger } from '@/lib/logger'


// 会员升级，累加使用次数，以及使用次数的时间
//{sub} 表示 传递进来一个对象，取对象的 sub 属性
// todo upgradeType 需要做一个约束, 理论上，mysql 数据库也需要同步。 付款失败，需要有日志记录
export const upgrade = async ({userId}: UserId, upgradeType: number) => {
  try {
    // 检查用户角色，前置条件是，付费成功，才会调用
    const userTotalRemainKey = getUserTotalRemainKey({userId})
    // update Expire
    // 会员用户，查询过期时间，计算新的过期时间，更新过期时间
    const TTL = await redis.ttl(userTotalRemainKey) | 0
    // @ts-ignore
    const newTTL = TTL + MEMBERSHIP_EXPIRE[upgradeType]
    // @ts-ignore
    const oldRemain = await redis.get(userTotalRemainKey) | 0
    // @ts-ignore
    const newRemain = oldRemain + ROLES_LIMIT[upgradeType]

    const res = await redis.set(userTotalRemainKey, newRemain, {ex: newRemain})
    if (res === 1) {
      return { userId, oldRemain: oldRemain, newRemain: newRemain, expire: newTTL, upgrade: 'success' }
    }
    // 充值失败时，报错
    Logger.warn(`upgrade error userId: ${userId}, upgradeType: ${upgradeType}`)
    return { userId, oldRemain: oldRemain, newRemain: newRemain, expire: newTTL, upgrade: 'fail' }
  }
  catch(e) {
    Logger.error(e as Error)
  }
}