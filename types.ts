
export enum PoolType {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  FORTNIGHT = 'fortnightly',
  MONTHLY = 'monthly'
}

export enum PoolStatus {
  HEALTHY = 'Healthy',
  WARNING = 'Warning',
  CRITICAL = 'Critical'
}

export enum MemberTier {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PLATINUM = 'Platinum'
}

export interface Pool {
  id: string;
  name: string;
  type: PoolType;
  contributionAmount: number;
  nextDueDate: string;
  rotationPosition: number;
  totalMembers: number;
  status: PoolStatus;
  currentCycle: number;
  totalPoolValue: number;
  members: PoolMember[];
}

export interface PoolMember {
  id: string;
  name: string;
  email: string;
  position: number;
  tier: MemberTier;
  status: 'Paid' | 'Late' | 'Pending' | 'Defaulted';
  penalties: number;
  totalContributed: number;
}

export interface Contribution {
  id: string;
  poolId: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Upcoming';
}

export interface User {
  id: string;
  name: string;
  walletBalance: number;
  totalSavings: number;
}
