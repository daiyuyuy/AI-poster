import { User } from "@prisma/client";

export type Role = 0 | 1 | 2 | 3; // 0 Standard User; 1 2 3 Member User

export type RedisUserId = string | null

export interface UserId {
  userId: string;
}

export interface RemainingParams {
  userId: string;
  role?: Role;
}

export interface UserInfo {
  userId: string;
  username: string;
  avatar?: string;
  platform: string;
  email: string;
  role: Role;
  membershipExpire?: number;
  accessToken?: string;
}

export interface UseRemaining {
  useExpire: number;
  useTotalRemain: number;
}

export interface PrismaUser extends User { }