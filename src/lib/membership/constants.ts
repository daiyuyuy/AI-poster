/**
 * 0 普通用户; 2 会员
 * Role values: 0 for Basic User; 2 for Member
 */

import { VariantIdsByType } from "@/types/subscribe";
import { Role, UserId } from "@/types/user";

// Definitions for user roles.
export const ROLES: { [key in Role]: string } = {
  0: 'Basic',
  1: 'LightTrial',
  2: 'Startup',
  3: 'Enterprise',
}

// Daily usage limits for different roles.
export const ROLES_LIMIT: { [key in Role]: number } = {
  0: process.env.NEXT_PUBLIC_COMMON_USER_DAILY_LIMIT_STR && Number(process.env.NEXT_PUBLIC_COMMON_USER_DAILY_LIMIT_STR) || 0,
  1: process.env.NEXT_PUBLIC_MEMBERSHIP_DAILY_LIMIT_STR_1 && Number(process.env.NEXT_PUBLIC_MEMBERSHIP_DAILY_LIMIT_STR_1) || 30,
  2: process.env.NEXT_PUBLIC_MEMBERSHIP_DAILY_LIMIT_STR_2 && Number(process.env.NEXT_PUBLIC_MEMBERSHIP_DAILY_LIMIT_STR_2) || 100,
  3: process.env.NEXT_PUBLIC_MEMBERSHIP_DAILY_LIMIT_STR_3 && Number(process.env.NEXT_PUBLIC_MEMBERSHIP_DAILY_LIMIT_STR_3) || 200,
}
export const ONE_DAY = 3600 * 24
export const MEMBERSHIP_EXPIRE: { [key in Role]: number } = {
  0: 0, // 会员一个月的时间 The value for monthly membership
  1: ONE_DAY * Number(process.env.MEMBERSHIP_EXPIRE_1 || 31),
  2: ONE_DAY * Number(process.env.MEMBERSHIP_EXPIRE_2 || 62),
  3: ONE_DAY * Number(process.env.MEMBERSHIP_EXPIRE_3 || 93),
}

// key统一管理，可以降低维护难度
// Functions to create cache keys for tracking user data.

// 用户剩余使用次数
export const getUserTotalRemainKey = (userId: string) => {
  const key = `USER_USAGE::uid:${userId}`;
  return key
}

// Variant keys for subscription types.
export const SUBSCRIPTION_VARIANT_KEY = 'subscription'
export const SINGLE_VARIANT_KEY = 'single'
// Variant IDs for different subscription types, to be used in checkouts and webhooks.
export const VARIANT_IDS_BY_TYPE: VariantIdsByType = {
  'subscription': process.env.LEMON_SQUEEZY_MEMBERSHIP_MONTHLY_VARIANT_ID || '', // checkouts 请求传参要用string，但是webhook收到的variant_id是number
  'single': process.env.LEMON_SQUEEZY_MEMBERSHIP_SINGLE_TIME_VARIANT_ID || '',
}
// Function to generate a cache key for single payment orders.
export const getSinglePayOrderKey = ({ identifier }: { identifier: string }) => {
  return `single_${identifier}`
}