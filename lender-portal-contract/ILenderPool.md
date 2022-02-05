## `ILenderPool`
Interface for lender pool contract. 

## setMinimumDeposit
### `setMinimumDeposit(uint256 _minimumDeposit)` (external)

changes the minimum amount required for deposit (newRound)

update `minimumDeposit` with `_minimumDeposit`

## newRound

### `newRound(address lender, uint256 amount, uint16 bonusAPY, uint8 tenure, bool paidTrade)` (external)

create new Round on behalf of the lender, each deposit has its own round

`lender` must approve the amount to be deposited first
only `Owner` can launch a new round
only function that can be `Paused`
add new round to `_lenderRounds`
`amount` will be transferred from `lender` to `address(this)`
emits Deposit event

## sendToTreasury
### `sendToTreasury(address tokenAddress, uint amount)` (external)
transfer tokens from the contract to the treasury

only `Owner` can send to treasury

tokenAddress address of the token to be transferred

amount amount of tokens to be transferred

## withdraw
### `withdraw(address lender, uint256 roundId)` (external)

Withdraw the initial deposit of the specified lender for the specified roundId
claim rewards of the specified roundId for the specific lender

only `Owner` can withdraw
round must be finish (`block.timestamp` must be higher than `round.endPeriod`)
run `_claimRewards` and `_withdraw`

## getRound
### `getRound(address lender, uint256 roundId) → struct ILenderPool.Round` (external)

Returns all the information of a specific round for a specific lender

returns Round struct of the specific round for a specific lender

## getLatestRound
### `getLatestRound(address lender)→(uint)` (external)
Returns the latest round for a specific lender

lender, address of the lender to be checked

## getNumberOfRounds
### `getNumberOfRounds(address lender) → uint256` (external)

Returns the number of rounds for the a specific lender

## getAmountLent
### `getAmountLent(address lender) → uint256` (external)

Returns the total amount lent for the lender on every round

## getFinishedRounds
### `getFinishedRounds(address lender) → uint256[]` (external)

Returns roundIds of every finished round

## stableRewardOf
### `stableRewardOf(address lender, uint256 roundId) → uint256` (external)

Returns the amount of stable rewards for a specific lender on a specific roundId

run `_calculateRewards` with `_stableAPY` based on the amountLent

### bonusRewardOf
### `bonusRewardOf(address lender, uint256 roundId) → uint256` (external)

Returns the amount of bonus rewards for a specific lender on a specific roundId

run `_calculateRewards` with `_lenderRounds[lender][roundId].bonusAPY` based on the amountLent

## MinimumDepositUpdated
### `MinimumDepositUpdated(  uint previousMinimumDeposit,   uint ewMinimumDeposit  )`
Emitted when `minimumDeposit` is updated

## NewTreasuryAddress
### `NewTreasuryAddress(  address oldTreasuryAddress, address ewTreasuryAddress  )`
Emitted when Treasury Address is updated
## TenureUpdated
### `TenureUpdated(uint16 oldTenure, uint16 newTenure)`
Emitted when Tenure is updated
## StableAPYUpdated
### `StableAPYUpdated(uint previousStableAPY, uint newStableAPY)`
Emitted when `_stableAPY` is updated
## Deposit
### `Deposit(address owner, uint256 roundId, uint256 amount)`

Emitted when `amount` tokens are deposited into a pool by generating a new Round


## Withdraw
### `Withdraw(address owner, uint256 roundId, uint256 amount)`

Emitted when lender withdraw initial `amount` lent on a specific round

## ClaimStable 
### `ClaimStable(address lender, uint256 roundId, uint256 amount)`

Emitted when `lender` claim rewards in Stable coin for a specific round

## ClaimTrade
### `ClaimTrade(address lender, uint256 roundId, uint256 amount)`

Emitted when `lender` claim rewards in Trade token for a specific round

## Swapped
### `Swapped(uint256 amountStable, uint256 amountTrade)`

Emitted when Stable coin are swapped into Trade token

## `Round`

bool paidTrade

uint16 stableAPY

uint16 bonusAPY

uint256 amountLent

uint256 startPeriod

uint256 endPeriod

## `LenderInfo` 

 uint amountLent

 uint roundCount
 