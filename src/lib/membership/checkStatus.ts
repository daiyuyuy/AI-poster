import {
    getUserTotalRemainKey,
} from "@/lib/membership/constants";
import redis from "@/lib/redis";
import {UserId} from "@/types/user";
import 'server-only';


// 检查剩余次数
export async function checkStatus({userId}: UserId) {
    const userTotalRemainKey = getUserTotalRemainKey({userId})
    const userExpire = await redis.ttl(userTotalRemainKey) | 0
    // @ts-ignore
    const userTotalRemain = await redis.get(userTotalRemainKey) | 0
    return {
        useExpire: userExpire,
        useTotalRemain: userTotalRemain,
    }
}

// 使用次数递减
export async function decrUserTotalRemain({userId}: UserId) {
    const useTotalRemainKey = getUserTotalRemainKey({userId})
    const useStatus = await checkStatus({userId})
    if (useStatus.userExpire != null || useStatus.userExpire != 0) {
        await redis.decr(userTotalRemainKey)
        return
    }
}