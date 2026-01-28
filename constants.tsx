
import React from 'react';
import { Pool, PoolType, PoolStatus, MemberTier } from './types';

export const COLORS = {
  primary: '#111827', // Dark Blue/Slate
  secondary: '#D4AF37', // Gold
  healthy: '#22c55e',
  warning: '#f59e0b',
  critical: '#ef4444',
  muted: '#94a3b8'
};

export const MOCK_USER = {
  id: 'u1',
  name: 'John Doe',
  walletBalance: 2300,
  totalSavings: 15750.00,
  upcomingContributions: 3,
  pendingPayouts: 2500.00
};

export const MOCK_POOLS: Pool[] = [
  {
    id: 'p1',
    name: 'Family Savings Circle',
    type: PoolType.MONTHLY,
    contributionAmount: 500,
    nextDueDate: '2026-02-05',
    rotationPosition: 3,
    totalMembers: 10,
    status: PoolStatus.HEALTHY,
    currentCycle: 4,
    totalPoolValue: 5000,
    members: []
  },
  {
    id: 'p2',
    name: 'Community Investment Fund',
    type: PoolType.WEEKLY,
    contributionAmount: 750,
    nextDueDate: '2026-02-10',
    rotationPosition: 5,
    totalMembers: 12,
    status: PoolStatus.WARNING,
    currentCycle: 12,
    totalPoolValue: 9000,
    members: []
  },
  {
    id: 'p3',
    name: 'Emergency Fund Pool',
    type: PoolType.DAILY,
    contributionAmount: 1000,
    nextDueDate: '2026-02-03',
    rotationPosition: 7,
    totalMembers: 15,
    status: PoolStatus.CRITICAL,
    currentCycle: 2,
    totalPoolValue: 15000,
    members: []
  }
];

export const MOCK_MEMBERS: any[] = [
  { id: 'm1', name: 'Sarah Johnson', email: 'sarah.j@email.com', position: 1, tier: MemberTier.GOLD, status: 'Paid', penalties: 0, total: 5000 },
  { id: 'm2', name: 'Michael Chen', email: 'michael.c@email.com', position: 2, tier: MemberTier.SILVER, status: 'Late', penalties: 2, total: 3500 },
  { id: 'm3', name: 'Emily Rodriguez', email: 'emily.r@email.com', position: 3, tier: MemberTier.BRONZE, status: 'Pending', penalties: 1, total: 2000 },
  { id: 'm4', name: 'David Thompson', email: 'david.t@email.com', position: 4, tier: MemberTier.GOLD, status: 'Paid', penalties: 0, total: 4800 },
  { id: 'm5', name: 'Aisha Patel', email: 'aisha.p@email.com', position: 5, tier: MemberTier.SILVER, status: 'Defaulted', penalties: 3, total: 1500 }
];
