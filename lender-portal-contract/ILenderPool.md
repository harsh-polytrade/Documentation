## `ILenderPool`
Interface for lender pool contract. 

## setMinimumDeposit
### `setMinimumDeposit(uint256 _minimumDeposit)` (external)

     * @notice changes the minimum amount required for deposit (newRound)
     * @dev update `minimumDeposit` with `newMinimumDeposit`
     * @param newMinimumDeposit, new amount for minimum deposit
## newRound

### `newRound(address lender, uint256 amount, uint16 bonusAPY, uint8 tenure, bool paidTrade)` (external)

     * @notice create new Round on behalf of the lender, each deposit has its own round
     * @dev `lender` must approve the amount to be deposited first
     * @dev only `Owner` can launch a new round
     * @dev add new round to `_lenderRounds`
     * @dev `amount` will be transferred from `lender` to `address(this)`
     * @dev emits Deposit event
     * @param lender, address of the lender
     * @param amount, amount to be deposited by the lender, must be greater than minimumDeposit
     * @param bonusAPY, bonus ratio to be applied
     * @param paidTrade, specifies whether if stable rewards will be paid in Trade(true) or in stable(false)


## sendToTreasury
### `sendToTreasury(address tokenAddress, uint amount)` (external)
     * @notice transfer tokens from the contract to the treasury
     * @dev only `Owner` can send to treasury
     * @param tokenAddress address of the token to be transferred
     * @param amount amount of tokens to be transferred
## withdraw
### `withdraw(address lender, uint256 roundId)` (external)

     * @notice Withdraw the initial deposit of the specified lender for the specified roundId
     * @notice claim rewards of the specified roundId for the specific lender
     * @dev only `Owner` can withdraw
     * @dev round must be finish (`block.timestamp` must be higher than `round.endPeriod`)
     * @dev run `_claimRewards` and `_withdraw`
     * @param lender, address of the lender
     * @param roundId, Id of the round
     * @param amountOutMin, The minimum amount tokens to receive

## getRound
### `getRound(address lender, uint256 roundId) → struct ILenderPool.Round` (external)

     * @notice Returns all the information of a specific round for a specific lender
     * @dev returns Round struct of the specific round for a specific lender
     * @param lender, address of the lender to be checked
     * @param roundId, Id of the round to be checked
     * @return Round ({ bool paidTrade, uint16 bonusAPY, uint amountLent, uint64 startPeriod, uint64 endPeriod })

## getLatestRound
### `getLatestRound(address lender)→(uint)` (external)
     * @notice Returns the latest round for a specific lender
     * @param lender, address of the lender to be checked
     * @return returns the latest round for a specific Lender


## getAmountLent
### `getAmountLent(address lender) → uint256` (external)

     * @notice Returns the total amount lent for the lender on every round
     * @param lender, address of the lender to be checked
     * @return returns amount lent by a lender

## getFinishedRounds
### `getFinishedRounds(address lender) → uint256[]` (external)

     * @notice Returns roundIds of every finished round
     * @param lender, address of the lender to be checked
     * @return returns array with all finished round Ids

## stableRewardOf
### `stableRewardOf(address lender, uint256 roundId) → uint256` (external)

     * @notice Returns the amount of stable rewards for a specific lender on a specific roundId
     * @dev run `_calculateRewards` with `_stableAPY` based on the amountLent
     * @param lender, address of the lender to be checked
     * @param roundId, Id of the round to be checked
     * @return returns the amount of stable rewards (based on stableInstance)

### bonusRewardOf
### `bonusRewardOf(address lender, uint256 roundId) → uint256` (external)

     * @notice Returns the amount of bonus rewards for a specific lender on a specific roundId
     * @dev run `_calculateRewards` with `_lenderRounds[lender][roundId].bonusAPY` based on the amountLent
     * @param lender, address of the lender to be checked
     * @param roundId, Id of the round to be checked
     * @return returns the amount of bonus rewards in stable (based on stableInstance)


## MinimumDepositUpdated
### `MinimumDepositUpdated(  uint previousMinimumDeposit,   uint ewMinimumDeposit  )`
     * @dev Emitted when `minimumDeposit` is updated

## NewTreasuryAddress
### `NewTreasuryAddress(  address oldTreasuryAddress, address ewTreasuryAddress  )`
     * @dev Emitted when Treasury Address is updated
## TenureUpdated
### `TenureUpdated(uint16 oldTenure, uint16 newTenure)`
     * @dev Emitted when Tenure is updated
## StableAPYUpdated
### `StableAPYUpdated(uint previousStableAPY, uint newStableAPY)`
     * @dev Emitted when `_stableAPY` is updated
## Deposit
### `Deposit(address owner, uint256 roundId, uint256 amount)`

     * @dev Emitted when `amount` tokens are deposited into a pool by generating a new Round


## Withdraw
### `Withdraw(address owner, uint256 roundId, uint256 amount)`

     * @dev Emitted when lender withdraw initial `amount` lent on a specific round

## ClaimStable 
### `ClaimStable(address lender, uint256 roundId, uint256 amount)`

     * @dev Emitted when `lender` claim rewards in Stable coin for a specific round

## ClaimTrade
### `ClaimTrade(address lender, uint256 roundId, uint256 amount)`

     * @dev Emitted when `lender` claim rewards in Trade token for a specific round

## Swapped
### `Swapped(uint256 amountStable, uint256 amountTrade)`

     * @dev Emitted when Stable coin are swapped into Trade token

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
     