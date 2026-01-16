# Backlog - Dependency Ordered

## Dependency Graph

```
1. Remove @zeit packages
   └── 2. Add build to CI
       └── 3. Add ESLint
           └── 4. Add type-check to CI
               └── 5. Install RTL
                   └── 6. Migrate tests (incremental)
                       └── 7. Remove Enzyme
                           └── 8. Upgrade React 18
                               └── 9. Upgrade Next.js 14
                                   └── 10. Add Lighthouse CI
                                       └── 11. Performance tuning
```

## Ordered Backlog

### Phase 1: Foundation (No Dependencies)

#### TICKET-001: Remove Deprecated @zeit Packages
- **Priority**: P0
- **Effort**: Small
- **Dependencies**: None
- **Status**: Ready

#### TICKET-002: Add Build Step to CI
- **Priority**: P0
- **Effort**: Small
- **Dependencies**: None
- **Status**: Ready

### Phase 2: Quality Tooling (After Phase 1)

#### TICKET-003: Add ESLint Configuration
- **Priority**: P1
- **Effort**: Medium
- **Dependencies**: TICKET-001, TICKET-002
- **Status**: Blocked by Phase 1

#### TICKET-004: Add Type Checking to CI
- **Priority**: P1
- **Effort**: Small
- **Dependencies**: TICKET-002
- **Status**: Blocked by Phase 1

### Phase 3: Testing Migration (After Phase 2)

#### TICKET-005: Install React Testing Library
- **Priority**: P1
- **Effort**: Small
- **Dependencies**: TICKET-003
- **Status**: Blocked by Phase 2

#### TICKET-006: Migrate Layout Tests to RTL
- **Priority**: P1
- **Effort**: Medium
- **Dependencies**: TICKET-005
- **Status**: Blocked by TICKET-005

#### TICKET-007: Migrate Nav Tests to RTL
- **Priority**: P1
- **Effort**: Medium
- **Dependencies**: TICKET-005
- **Status**: Blocked by TICKET-005

#### TICKET-008: Migrate Content Tests to RTL
- **Priority**: P1
- **Effort**: Medium
- **Dependencies**: TICKET-005
- **Status**: Blocked by TICKET-005

#### TICKET-009: Remove Enzyme
- **Priority**: P1
- **Effort**: Small
- **Dependencies**: TICKET-006, TICKET-007, TICKET-008
- **Status**: Blocked by test migration

### Phase 4: Framework Upgrades (After Phase 3)

#### TICKET-010: Upgrade to React 18
- **Priority**: P2
- **Effort**: Medium
- **Dependencies**: TICKET-009
- **Status**: Blocked by Phase 3

#### TICKET-011: Upgrade to Next.js 14
- **Priority**: P2
- **Effort**: Medium
- **Dependencies**: TICKET-010
- **Status**: Blocked by React 18

### Phase 5: Optimization (After Phase 4)

#### TICKET-012: Add Lighthouse CI
- **Priority**: P3
- **Effort**: Small
- **Dependencies**: TICKET-011
- **Status**: Blocked by Phase 4

#### TICKET-013: Implement Lazy Loading
- **Priority**: P3
- **Effort**: Small
- **Dependencies**: TICKET-011
- **Status**: Blocked by Phase 4

#### TICKET-014: Bundle Size Optimization
- **Priority**: P3
- **Effort**: Medium
- **Dependencies**: TICKET-012
- **Status**: Blocked by Lighthouse CI

## Quick Reference

| Ticket | Title | Priority | Effort | Blocked By |
|--------|-------|----------|--------|------------|
| 001 | Remove @zeit packages | P0 | S | - |
| 002 | Add build to CI | P0 | S | - |
| 003 | Add ESLint | P1 | M | 001, 002 |
| 004 | Add type-check to CI | P1 | S | 002 |
| 005 | Install RTL | P1 | S | 003 |
| 006 | Migrate Layout tests | P1 | M | 005 |
| 007 | Migrate Nav tests | P1 | M | 005 |
| 008 | Migrate Content tests | P1 | M | 005 |
| 009 | Remove Enzyme | P1 | S | 006-008 |
| 010 | Upgrade React 18 | P2 | M | 009 |
| 011 | Upgrade Next.js 14 | P2 | M | 010 |
| 012 | Add Lighthouse CI | P3 | S | 011 |
| 013 | Lazy loading | P3 | S | 011 |
| 014 | Bundle optimization | P3 | M | 012 |

## Effort Key
- **S (Small)**: < 2 hours
- **M (Medium)**: 2-8 hours
- **L (Large)**: > 8 hours
