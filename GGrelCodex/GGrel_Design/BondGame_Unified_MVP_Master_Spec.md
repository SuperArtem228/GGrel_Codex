# BondGame Unified MVP Master Spec
## Product + UX + UI + Tech + Backend + PWA + Push
### Version 1.0
### Status: Source of Truth for Claude Design and Claude Code

---

## 0. Document status

This document is the **single source of truth** for the BondGame MVP.

It merges:
- product vision and mechanics
- MVP scope
- UX flows
- visual direction
- backend architecture
- data model
- PWA requirements
- push notifications
- implementation order

### Conflict resolution policy

When older documents conflict, this document wins.

Priority order:
1. **This Unified Master Spec**
2. PWA PRD
3. MVP Spec
4. GDD as long-term vision only

### What this means in practice

- Build **web PWA**, not React Native
- Build **real backend**, not frontend-only or Firebase-only prototype
- Build **stylish premium UI**, not dark prototype UI
- Cases contain **real rewards from the store**, not cosmetic loot
- MVP excludes PvP, leagues, tournaments, Battle Pass, social competition, and monetization
- GDD remains useful as a future roadmap and balancing reference, not as direct MVP scope

---

# 1. Product overview

## 1.1. What BondGame is

BondGame is a mobile-first PWA for couples.

Two partners create tasks for each other, complete daily and weekly challenges, earn Love Coins, spend them on real rewards, open reward-based cases, and optionally enter a private Spicy Mode if both explicitly agree.

This is a cooperative relationship product with game structure, not a casino product, not a public social network, and not a competitive app inside the couple.

## 1.2. JTBD

Help couples do more good things together without making it feel like an obligation.

## 1.3. Core promise

Open the app and always see meaningful progress:
- a task
- a challenge
- a streak
- a reward
- a case
- a profile improvement
- a private moment for the couple

---

# 2. Product principles

## 2.1. Partners are on the same side

Inside the pair there should never be a winner and a loser.
The product may contain negotiation, timing, choice, and asymmetry, but not toxic internal competition.

## 2.2. Every action should create value

If one partner performs an action:
- one gets a reward
- the other gets a useful or emotional result
- ideally both feel progress

## 2.3. Progress must be visible every day

Even small activity should move at least one visible indicator:
- streak
- wallet
- challenge progress
- reward ownership
- profile level
- pair progress

## 2.4. Tone must stay soft

No guilt mechanics.
No accusatory copy.
No “you failed your partner” framing.

## 2.5. Spicy Mode must be consent-based

Spicy Mode exists only if both partners explicitly opt in.

---

# 3. Target platform and implementation choice

## 3.1. Target platform

**Primary platform: web PWA**

This is not a React Native build target for the MVP.

## 3.2. Why PWA

PWA is the right MVP format because:
- install flow is simple
- push is available
- session persistence is straightforward
- Claude Code can build a full-stack app faster in one repo
- backend, routes, UI, auth, and state can live together
- product can behave like an app while staying web-deliverable

---

# 4. Recommended stack

## 4.1. Frontend

- Next.js 15
- App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

## 4.2. Backend

- Next.js route handlers + server actions
- PostgreSQL
- Prisma
- Auth.js or Lucia
- secure cookie-based server sessions

## 4.3. PWA

- manifest.json
- service worker
- standalone install flow
- app icons
- offline shell
- background sync where useful

## 4.4. Push

- Web Push API
- VAPID keys
- push subscriptions stored in DB

## 4.5. Storage and infra

- file storage: Supabase Storage or S3-compatible
- deployment: Vercel + managed Postgres
- background jobs: cron / trigger.dev / QStash

---

# 5. Users and roles

## 5.1. Roles

- User A
- User B
- Pair

## 5.2. Example pair in product copy

Use:
- **Артём**
- **Маша**

for demos, fixtures, and design examples.

---

# 6. MVP scope

## 6.1. Included in MVP

### Auth and pair setup
- sign up
- log in
- restore session
- create pair
- create invite code
- join pair
- waiting state until second partner joins

### Home
- personal wallet
- pair wallet / common pool
- streak summary
- daily challenge preview
- incoming tasks preview
- active tasks preview

### Tasks
- create task
- send task
- accept
- decline
- bargain
- start
- complete
- confirm
- dispute
- auto-expire
- exchange / voluntary board

### Challenges
- daily
- weekly
- solo and couple variants
- detail screen
- progress tracking
- reward claim

### Economy
- Love Coins
- personal wallet
- common pool
- transaction log

### Rewards
- store rewards
- custom rewards
- buy for partner
- activate later
- fulfill reward

### Cases
- ready-made cases
- user-created cases
- only real store rewards inside
- price-based probabilities
- preview before publish
- open
- reveal
- reward ownership after reveal

### Spicy Mode
- mutual opt-in
- locked state
- waiting-for-partner state
- private rewards
- private cases
- privacy settings

### Profile
- pair profile
- partner profile
- base stats
- showcase
- album-lite
- settings

### PWA and push
- installable PWA
- offline shell
- persistent sessions
- push subscriptions
- minimal useful push triggers

## 6.2. Explicitly excluded from MVP

Do not build now:
- PvP duels
- leagues
- rankings
- tournaments
- Battle Pass
- Bond Points
- public social layer
- club mechanics
- external auctions
- monetization
- AI recommendation engine
- complex seasonal systems
- cosmetic loot economy

---

# 7. Core entities

Main entities:
- User
- Session
- Pair
- PairInvite
- PairMember
- Wallet
- WalletTransaction
- Task
- TaskBargainRound
- ChallengeTemplate
- PairChallenge
- RewardTemplate
- OwnedReward
- CaseTemplate
- CaseItem
- CaseOpen
- PushSubscription
- NotificationLog
- SpicyConsent

---

# 8. Product information architecture

## 8.1. Main sections

- Welcome / Auth
- Pair Setup
- Home
- Tasks
- Challenges
- Shop
- Cases
- Profile
- Settings
- Spicy Mode

## 8.2. Bottom navigation

- Home
- Tasks
- Challenges
- Shop
- Profile

## 8.3. Secondary routes / stacks

- Create Task
- Task Detail
- Challenge Detail
- Reward Detail
- Case Builder
- Case Reveal
- My Rewards
- Partner Profile
- Pair Settings
- Spicy Mode screens

---

# 9. Economy

## 9.1. Main currency

**Love Coins (LC)**

## 9.2. Wallet model

### Personal wallet
Belongs to one user.
Used for:
- tasks
- cases
- rewards
- some private mechanics

### Common pool
Belongs to the pair.
In MVP:
- visible and real
- can support pair-oriented mechanics
- should stay simple
- do not overload with advanced sinks now

## 9.3. Sources of LC in MVP

- task completion
- daily challenge completion
- weekly challenge completion
- streak bonuses
- case reward if reward is LC-based or equivalent value
- manual seed balances on onboarding

## 9.4. Sinks of LC in MVP

- sending tasks
- buying rewards
- opening cases

## 9.5. Task pricing

Recommended range:
- 20–500 LC

## 9.6. Reward pricing

Recommended range:
- 40–600 LC

## 9.7. Case logic

A case is not cosmetic loot.
A case is a probability-based wrapper around real store rewards.

Example:
- choose the movie — 40 LC — 45%
- massage — 80 LC — 28%
- home date — 160 LC — 18%
- restaurant — 300 LC — 9%

Higher value reward = lower probability.

---

# 10. Tasks system

## 10.1. Purpose

Tasks are the core interaction loop.

They turn everyday actions into explicit but soft exchanges of value.

## 10.2. Task state machine

- draft
- proposed
- bargaining
- accepted
- in_progress
- pending_confirm
- disputed
- confirmed
- cancelled
- expired

## 10.3. Task creation fields

- assigned partner
- title
- description
- category
- price
- deadline
- urgent flag
- bonus speed
- bonus quality
- bargain allowed
- on exchange
- optional private / spicy category when spicy mode is enabled

## 10.4. Bargain rules

- max 2 counteroffers from executor
- max price = 150% of original
- deadline shifts only within allowed bounds
- timeout per round must be enforced
- system handles unresolved state safely

## 10.5. Wallet lock logic

On task creation:
- reserve LC on creator side

On confirmation:
- release reserve
- transfer LC to executor

On cancel / expiry:
- release reserve back to creator

On dispute timeout:
- default resolution rule must apply

## 10.6. Exchange board

Exchange is not an auction.
It is a soft voluntary board.

Use it for:
- open tasks
- lower-pressure task pickup
- non-direct assignment flows

---

# 11. Challenges system

## 11.1. Types

- solo
- couple
- async couple

## 11.2. Schedules

- daily
- weekly

## 11.3. Daily flow

- system offers a set
- pair selects or auto-selection happens by rule
- user completes step
- if both required, both must complete
- reward granted

## 11.4. Weekly flow

- longer progress chain
- visible progress
- higher LC reward
- should feel meaningful, not grindy

## 11.5. Challenge fields

- title
- description
- category
- difficulty
- reward_lc
- requires_both
- steps / total steps
- cooldown
- pack / theme
- spicy flag if relevant

---

# 12. Rewards store

## 12.1. What rewards are

Rewards are things one partner can buy for the other.

They are not abstract cosmetics in the MVP core loop.

## 12.2. Reward types

### Action reward
Needs the partner to do something.
Examples:
- massage
- breakfast in bed
- organize a date

### Instant reward
Works immediately.
Examples:
- choose the movie
- right to pick the place
- skip-like utility

### Private reward
Visible only in Spicy Mode.

## 12.3. Reward template origin

- system reward
- user-created custom reward

## 12.4. Owned reward lifecycle

- purchased
- owned
- activated
- fulfilled
- archived

---

# 13. Cases

## 13.1. Positioning

Cases are one of the emotional loops of the product.
They should feel exciting but not manipulative.

## 13.2. Allowed case types in MVP

- ready-made system cases
- user-built cases

## 13.3. What can be inside

Only:
- real reward templates
- private spicy rewards if spicy mode is on

Not allowed in MVP:
- cosmetic frames
- badges
- titles
- abstract loot
- separate rarity economy detached from real reward value

## 13.4. Case builder

User can:
- create case
- name case
- add 3–8 rewards
- assign probabilities
- review expected value
- publish case

## 13.5. Validation rules

- min 3 rewards
- max 8 rewards
- total probability = 100%
- enough reward data
- enough wallet balance to open
- spicy-only rewards only inside spicy-enabled context

## 13.6. Opening flow

- preview
- suspense
- reveal
- reward assigned to owner
- optional activate later

---

# 14. Spicy Mode

## 14.1. Product intent

Spicy Mode is a private, adult, opt-in layer of the same product.
It must feel elegant, discreet, and safe.

## 14.2. Core rule

Both users must explicitly opt in.

## 14.3. States

- locked
- one-side enabled / waiting
- enabled for both
- disabled after one-side opt-out

## 14.4. Privacy rules

- spicy content hidden from normal store
- spicy content hidden from public profile
- spicy notifications must remain neutral
- no explicit content in general history
- private rewards and private cases are isolated

## 14.5. Spicy product areas

- private home / room
- private rewards
- private cases
- private settings

## 14.6. UX tone

- adult
- premium
- discreet
- consensual
- never vulgar

---

# 15. Profile and progression

## 15.1. Pair profile

Show:
- pair name
- avatars
- level
- XP
- pair streak
- highlight stats
- showcase
- album entry points

## 15.2. Partner profile

Show:
- partner summary
- personal wallet
- personal streak
- recent activity preview

## 15.3. Album

MVP version:
- lightweight
- milestones
- reward moments
- memorable completions
- not a massive archive system yet

---

# 16. Session management

## 16.1. Required behavior

Use real server-side sessions.

Rules:
- secure cookie
- httpOnly
- restore on reopen
- survives PWA install
- logout destroys session server-side
- no localStorage-only auth

## 16.2. Why this matters

Product state is relational and sensitive:
- pair membership
- wallets
- tasks
- private mode
- rewards
- push subscriptions

---

# 17. PWA requirements

## 17.1. Required

- installable manifest
- standalone mode
- icons
- splash behavior
- theme color
- service worker
- offline shell

## 17.2. Must work well after install

- session should persist
- app should feel native-like
- navigation should feel app-shell based
- initial load should be fast

## 17.3. Offline expectations

Can work from cache:
- home
- latest tasks
- profile
- reward lists
- local draft creation

Requires network:
- send task
- accept / bargain
- confirm task
- open case
- change spicy consent
- sync wallet

---

# 18. Push notifications

## 18.1. MVP triggers

- partner sent task
- partner replied to task
- task confirmed
- streak at risk
- reward activated
- case result available
- neutral spicy update

## 18.2. Push copy policy

Normal:
- “Маша отправила тебе задачу”
- “Артём ответил на задачу”
- “+140 LC получено”
- “Серия пары под риском”

Spicy:
- “У вас есть приватное обновление”
- “Новая приватная награда доступна”

Never put explicit spicy details into push copy.

---

# 19. Design direction

## 19.1. Design goal

Create a polished premium production-like relationship product.
Not a rough prototype.
Not a casino clone.
Not a childish gamification app.

## 19.2. Main visual language

### Core mode
- light premium UI
- soft gray / off-white background
- black typography
- acid-lime primary accent
- rounded cards
- calm luxury / beauty-retail feel
- strong spacing
- polished hierarchy

### Spicy mode
- same base structure
- private accent with magenta / violet
- discreet premium feel
- no vulgar imagery
- no explicit visual language
- no cheap “adult app” styling

## 19.3. Avoid

- dark MVP prototype theme
- generic AI gradient soup
- dribbble clutter
- overloaded glassmorphism
- casino visual language
- cartoonish gamification
- explicit spicy visuals

## 19.4. Product feel references

Target feel:
- premium lifestyle app
- retail-grade polish
- modern relationship product
- app-shell mobile-first PWA
- elegant and calm, not loud

---

# 20. Design tokens

## 20.1. Core palette

### Main mode
- background: warm off-white / light neutral
- surface: white / soft gray
- text primary: near-black
- text secondary: muted gray
- primary accent: acid lime
- success: calm green
- warning: warm gold if needed

### Spicy mode
- primary private accent: magenta
- secondary private accent: violet
- same light surfaces
- same black typography
- no black-red cliché styling

## 20.2. Typography

- strong clean grotesk sans
- large bold display titles
- neutral readable body
- compact metadata text
- clear hierarchy

## 20.3. Shape language

- large rounded cards
- full pill buttons
- soft containers
- minimal harsh edges

## 20.4. Motion

- smooth and premium
- micro-interactions for reveal, confirm, reward, toggle
- tasteful suspense in case opening
- restrained motion in Spicy Mode

---

# 21. Component system

Claude Design and Claude Code should share this component model.

## 21.1. Core components

- AppShell
- BottomNav
- TopHeader
- SectionHeader
- WalletCard
- PairSummaryCard
- TaskCard
- ChallengeCard
- RewardCard
- CaseCard
- RewardOwnedCard
- ShowcaseCard
- ProgressBar
- Badge / Pill
- Chip / FilterChip
- Button
- GhostButton
- Modal / Sheet
- EmptyState
- LoadingSkeleton
- Toast / Inline status

## 21.2. Private mode components

- PrivateBadge
- ConsentCard
- PrivateRewardCard
- PrivateCaseCard
- PrivacySettingsRows

---

# 22. Screen inventory

## 22.1. Entry
- Welcome
- Sign up
- Login
- Create pair
- Join pair
- Waiting for partner
- Pair ready

## 22.2. Home
- Home empty
- Home active
- Daily opened
- Incoming preview
- Streak risk
- Reward toast

## 22.3. Tasks
- Tasks inbox
- Create task
- Task preview
- Task detail proposed
- Counter offer
- Bargain chat
- Accepted
- In progress
- Pending confirm
- Confirmed
- Dispute
- Exchange board

## 22.4. Challenges
- Choose daily
- Today
- Challenge detail
- Partner pending
- Weekly
- Available
- Complete
- Streak saved

## 22.5. Shop and cases
- Shop hub
- Rewards list
- Reward detail
- Cases entry
- Templates
- Case builder
- Add rewards
- Chances
- Case price
- Case preview
- Suspense
- Reveal

## 22.6. Spicy Mode
- Locked
- Consent intro
- Waiting for partner
- Enabled state
- Private room
- Private rewards
- Create spicy reward
- Spicy cases
- Build spicy case
- Spicy chances
- Spicy reveal
- Privacy settings

## 22.7. Profile and system states
- Pair profile
- Partner profile
- Album
- Settings
- Notifications
- Empty state
- Offline
- Loading
- Error

---

# 23. Backend domain model

## 23.1. Tables / models

### users
- id
- email
- password_hash
- display_name
- avatar_url
- created_at
- updated_at

### sessions
- id
- user_id
- expires_at
- created_at
- user_agent
- ip_hash

### pairs
- id
- name
- created_by
- status
- timezone
- common_wallet_balance
- couple_streak
- last_streak_date
- grace_tokens
- spicy_enabled
- created_at
- updated_at

### pair_members
- id
- pair_id
- user_id
- role
- personal_wallet_balance
- personal_streak
- spicy_opt_in
- joined_at

### pair_invites
- id
- pair_id
- code
- expires_at
- consumed_at
- created_at

### tasks
- id
- pair_id
- created_by_user_id
- assigned_to_user_id
- title
- description
- category
- price_lc
- bonus_speed_lc
- bonus_quality_lc
- deadline_at
- urgent
- bargain_allowed
- on_exchange
- status
- frozen_amount_lc
- accepted_at
- completed_at
- confirmed_at
- expired_at
- created_at
- updated_at

### task_bargain_rounds
- id
- task_id
- actor_user_id
- offered_price_lc
- offered_deadline_at
- message
- created_at

### challenge_templates
- id
- kind
- title
- description
- category
- difficulty
- reward_lc
- requires_both
- pack_key
- is_spicy

### pair_challenges
- id
- pair_id
- template_id
- period_key
- status
- progress_user_a
- progress_user_b
- reward_claimed
- started_at
- expires_at

### reward_templates
- id
- created_by_user_id nullable
- title
- description
- category
- price_lc
- is_spicy
- is_system
- active
- created_at

### owned_rewards
- id
- pair_id
- reward_template_id
- owner_user_id
- purchased_by_user_id
- status
- source_type
- source_id
- activated_at
- fulfilled_at
- private_flag
- created_at

### case_templates
- id
- created_by_user_id nullable
- pair_id nullable
- title
- description
- open_price_lc
- is_spicy
- is_system
- active
- created_at

### case_items
- id
- case_template_id
- reward_template_id
- probability_percent
- sort_order

### case_opens
- id
- case_template_id
- pair_id
- opened_by_user_id
- received_reward_template_id
- open_price_lc
- result_probability_percent
- created_at

### wallet_transactions
- id
- pair_id
- user_id nullable
- wallet_type
- amount_lc
- reason
- related_type
- related_id
- created_at

### push_subscriptions
- id
- user_id
- endpoint
- p256dh
- auth
- user_agent
- active
- created_at
- updated_at

### notification_logs
- id
- user_id
- pair_id nullable
- kind
- title
- body
- payload_json
- sent_at
- status

### spicy_consents
- id
- pair_id
- user_id
- enabled
- created_at
- updated_at

---

# 24. Core server actions / API surface

## 24.1. Auth
- signUp
- signIn
- signOut
- getSession

## 24.2. Pair
- createPair
- createInvite
- joinPair
- getPair

## 24.3. Tasks
- createTask
- respondToTask
- submitBargain
- acceptBargain
- startTask
- completeTask
- confirmTask
- disputeTask
- expireTask

## 24.4. Challenges
- getTodayChallenges
- selectDailyChallenges
- completeChallengeStep
- claimChallengeReward

## 24.5. Rewards
- listRewards
- createCustomReward
- buyReward
- activateReward
- fulfillReward

## 24.6. Cases
- listCaseTemplates
- createCaseTemplate
- addCaseItem
- publishCase
- openCase

## 24.7. Spicy
- setSpicyConsent
- getSpicyStatus
- listSpicyRewards
- createSpicyReward
- listSpicyCases

## 24.8. Push
- savePushSubscription
- removePushSubscription
- sendNotification

---

# 25. Validation rules

## 25.1. Tasks
- price 20–500 LC
- deadline cannot be in the past
- cannot send task to self
- cannot spend more than wallet balance
- bargain max 150%
- task must belong to pair

## 25.2. Cases
- min 3 rewards
- max 8 rewards
- probability total must be 100
- no empty case publish
- no case open without balance
- spicy case requires spicy enabled

## 25.3. Rewards
- custom reward must have title
- spicy reward only visible in spicy context
- invalid category rejected server-side

## 25.4. Sessions and membership
- every mutation checks pair membership
- every private call checks authorization
- every spicy call checks consent state

---

# 26. Security and privacy

- all state-changing actions must be server-side
- all pair access must verify membership
- spicy content must be access-controlled
- no explicit spicy titles in push logs
- rate-limit auth and invite creation
- validate wallet operations atomically
- prevent double-open case race conditions
- use idempotency where useful

---

# 27. Offline and reliability

## 27.1. Offline shell

The app must open and render useful cached UI without network.

## 27.2. Cached views

- home
- latest tasks
- profile
- reward lists
- settings

## 27.3. Deferred actions

Allow draft-like local handling for:
- draft task
- local UI state
- maybe queued completion intent

But true state mutation should reconcile against backend.

## 27.4. Important note

Do not rely on client-only truth for:
- wallet
- case result
- task transitions
- spicy state
- reward ownership

---

# 28. Push strategy

## 28.1. Good push
Useful, timely, discreet.

## 28.2. Bad push
Spam, promo, guilt, explicit spicy wording.

## 28.3. Push categories
- transactional
- reminder
- private neutral
- installation / permission confirmation only if needed

---

# 29. Edge cases to cover

## Auth / Pair
- expired invite
- duplicate join
- account deletion
- second user never joins

## Tasks
- proposed deadline expired
- in-progress deadline expired
- unresolved bargain
- unresolved dispute
- one partner offline
- wallet changed mid-flow

## Challenges
- user completed offline
- second partner completed later
- no daily selection by pair
- duplicate reward claim attempt

## Cases
- invalid probabilities
- reward removed from case before open
- double click on open
- insufficient balance
- spicy state changed between preview and open

## Spicy
- one opted in, one not
- one disabled after reward purchase
- hidden reward exists while mode off
- push permission on but privacy needs neutral text

## PWA
- installed app but session expired
- push subscription invalid
- stale cached state after reconnect
- browser blocks push

---

# 30. Analytics events

## Auth
- signup_started
- signup_completed
- login_completed
- pair_created
- pair_joined

## Tasks
- task_created
- task_sent
- task_accepted
- task_declined
- task_bargain_started
- task_bargain_accepted
- task_completed
- task_confirmed
- task_disputed

## Challenges
- challenge_selected
- challenge_step_completed
- challenge_completed
- challenge_reward_claimed

## Rewards
- reward_created
- reward_purchased
- reward_activated
- reward_fulfilled

## Cases
- case_created
- case_published
- case_open_started
- case_open_completed
- case_reward_dropped

## Spicy
- spicy_opt_in_enabled
- spicy_opt_in_disabled
- spicy_pair_enabled
- spicy_reward_created
- spicy_case_created

## PWA / Push
- pwa_installed
- push_permission_requested
- push_permission_granted
- push_permission_denied
- push_subscription_saved

---

# 31. Visual implementation notes for Claude Design

## 31.1. Design first goals

Claude Design should:
- establish visual system
- define component library
- design key screens
- keep layouts implementation-friendly

## 31.2. Design output must include

- app shell
- wallet summary
- task cards
- challenge cards
- reward cards
- case builder
- case reveal
- spicy consent flow
- spicy private room
- settings and privacy rows
- empty/loading/error states

## 31.3. Design guardrails

- mobile-first web PWA layouts
- realistic spacing
- buildable UI
- no fake impossible interactions
- no fantasy-only visual concepts

---

# 32. Implementation plan for Claude Code

## Phase 1. Foundation
- Next.js app
- Tailwind
- shadcn/ui
- Auth
- Postgres
- Prisma
- session middleware

## Phase 2. Pair setup
- invite codes
- pair creation
- join pair
- pair membership checks

## Phase 3. UI shell
- design system
- app shell
- nav
- cards
- headers
- forms

## Phase 4. Tasks
- full lifecycle
- bargain flow
- wallet reserve logic
- confirm / dispute

## Phase 5. Challenges
- daily / weekly templates
- select and complete
- claim reward

## Phase 6. Rewards
- store
- custom rewards
- buy / activate / fulfill

## Phase 7. Cases
- templates
- builder
- validation
- open and reveal

## Phase 8. Spicy Mode
- consent state
- private routes
- private rewards
- private cases
- privacy safeguards

## Phase 9. PWA
- manifest
- service worker
- install flow
- offline shell

## Phase 10. Push
- subscription flow
- web push send
- neutral private messages

## Phase 11. Polish
- retries
- loading
- empty states
- edge case handling
- install/session tests

---

# 33. What Claude Code must deliver

Minimum acceptable output:
- working full-stack Next.js PWA
- PostgreSQL schema
- Prisma migrations
- auth and persistent sessions
- pair invite flow
- home, tasks, challenges, shop, profile
- reward shop
- real-reward cases
- spicy mode
- push subscription flow
- manifest + service worker
- seeds for challenges and rewards
- solid loading / empty / error states

---

# 34. Final implementation instruction

Build BondGame as a **stylish production-like full-stack web PWA MVP** for couples.

Requirements:
- Next.js + TypeScript + Tailwind + shadcn/ui
- PostgreSQL + Prisma
- server-side sessions
- installable PWA
- web push notifications
- real backend
- light premium UI
- elegant private Spicy Mode
- cases with real store rewards
- price-based drop probabilities
- backend-owned state
- persistent sessions after reopen and install

Do not build React Native.
Do not build a frontend-only prototype.
Do not reintroduce PvP, leagues, Battle Pass, or cosmetic loot into MVP.

This document is the final source of truth.
