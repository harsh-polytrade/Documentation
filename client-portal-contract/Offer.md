## `Offers`

## constructor
### `constructor(address pricingTableAddress,address priceFeedAddress,address treasuryAddress ) ` (public)

## useOracle
### `useOracle(bool status)` (external)
     * @dev Activate/De-activate usage of the Oracle


## setPriceFeedAddress
### `setPriceFeedAddress(address _newPriceFeed)` (external)
     * @dev Set PriceFeed linked to the contract to a new PriceFeed (`priceFeed`) 
     * Can only be called by the owner
## setPricingTableAddress
### `setPricingTableAddress(address _newPricingTable)` (external)
     * @dev Set PricingTable linked to the contract to a new PricingTable (`pricingTable`)
     * Can only be called by the owner
## setTreasuryAddress
### `setTreasuryAddress(address _newTreasury)` (external)
     * @dev Set TreasuryAddress linked to the contract to a new treasuryAddress
     * Can only be called by the owner
## setLenderPoolAddress
### `setLenderPoolAddress(        address stableAddress,        address lenderPoolAddress    )` (external)
     * @dev Set LenderPoolAddress linked to the contract to a new lenderPoolAddress
     * Can only be called by the owner
## checkOfferValidity
### `checkOfferValidity(        uint16 pricingId,        uint16 tenure,        uint16 advanceFee,        uint16 discountFee,        uint16 factoringFee,        uint invoiceAmount,        uint availableAmount    )` (external)
     * @notice check if params fit with the pricingItem
     * @dev checks every params and returns a custom Error
     * @param pricingId, Id of the pricing Item
     * @param tenure, tenure expressed in number of days
     * @param advanceFee, ratio for the advance Fee
     * @param discountFee, ratio for the discount Fee
     * @param factoringFee, ratio for the factoring Fee
     * @param invoiceAmount, amount for the invoice
     * @param availableAmount, amount for the available amount
## createOffer
### `createOffer(        uint16 pricingId,        uint16 advanceFee,        uint16 discountFee,        uint16 factoringFee,        uint8 gracePeriod,        uint invoiceAmount,        uint availableAmount,        uint16 tenure,        address stableAddress    ) `(public)
     * @notice Create an offer, check if it fits pricingItem requirements and send Advance to treasury
     * @dev calls _checkParams and returns Error if params don't fit with the pricingID
     * @dev only `Owner` can create a new offer
     * @dev emits OfferCreated event
     * @dev send Advance Amount to treasury
     * @param pricingId, Id of the pricing Item
     * @param advanceFee;
     * @param discountFee;
     * @param factoringFee;
     * @param gracePeriod;
     * @param availableAmount;
     * @param invoiceAmount;
     * @param tenure;
     * @param stableAddress;
## reserveRefund
### `reserveRefund(        uint offerId,        uint64 dueDate,        uint16 lateFee    ) ` (public)
     * @notice Send the reserve Refund to the treasury
     * @dev checks if Offer exists and if not refunded yet
     * @dev only `Owner` can call reserveRefund
     * @dev emits OfferReserveRefunded event
     * @param offerId, Id of the offer
     * @param dueDate, due date
     * @param lateFee, late fees (ratio)
## _checkParams
### `_checkParams(        uint16 pricingId,        uint16 tenure,        uint16 advanceFee,        uint16 discountFee,        uint16 factoringFee,        uint invoiceAmount,        uint availableAmount    ) ` (private)
     * @notice check if params fit with the pricingItem
     * @dev checks every params and returns a custom Error
     * @param pricingId, Id of the pricing Item
     * @param tenure, tenure expressed in number of days
     * @param advanceFee, ratio for the advance Fee
     * @param discountFee, ratio for the discount Fee
     * @param factoringFee, ratio for the factoring Fee
     * @param invoiceAmount, amount for the invoice
     * @param availableAmount, amount for the available amount

## __calculateAdvancedAmount
### `__calculateAdvancedAmount(uint availableAmount, uint16 advanceFee)`(private) 
     * @notice calculate the advanced Amount (availableAmount * advanceFee)
     * @dev calculate based on `(availableAmount * advanceFee)/ _precision` formula
     * @param availableAmount, amount for the available amount
     * @param advanceFee, ratio for the advance Fee
     * @return uint amount of the advanced

## _calculateFactoringAmount
### `_calculateFactoringAmount(uint invoiceAmount, uint16 factoringFee)`(private)
     * @notice calculate the Factoring Amount (invoiceAmount * factoringFee)
     * @dev calculate based on `(invoiceAmount * factoringFee) / _precision` formula
     * @param invoiceAmount, amount for the invoice amount
     * @param factoringFee, ratio for the factoring Fee
     * @return uint amount of the factoring

## _calculateDiscountAmount
### `_calculateDiscountAmount(        uint advancedAmount,        uint16 discountFee,        uint16 tenure    )`(private)
     * @notice calculate the Discount Amount ((advancedAmount * discountFee) / 365) * tenure)
     * @dev calculate based on `((advancedAmount * discountFee) / 365) * tenure) / _precision` formula
     * @param advancedAmount, amount for the advanced amount
     * @param discountFee, ratio for the discount Fee
     * @param tenure, tenure
     * @return uint amount of the Discount

## _calculateDiscountAmount
### `OfferCreated(uint256 offerId, bytes2 pricingId)` (private)
Emitted when new offer is created


## _calculateLateAmount
### `_calculateLateAmount(        uint advancedAmount,        uint16 lateFee,        uint24 lateDays    ) ` (private)
     * @notice calculate the Late Amount (((lateFee * advancedAmount) / 365) * lateDays)
     * @dev calculate based on `(((lateFee * advancedAmount) / 365) * lateDays) / _precision` formula
     * @param advancedAmount, amount for the advanced amount
     * @param lateFee, ratio for the late Fee
     * @param lateDays, number of late days
     * @return uint, Late Amount

## _calculateLateDays
### `_calculateLateDays(uint dueDate, uint gracePeriod)` (private)
     * @notice calculate the number of Late Days (Now - dueDate - gracePeriod)
     * @dev calculate based on `(block.timestamp - dueDate - gracePeriod) / 1 days` formula
     * @param dueDate, due date -> epoch timestamps format
     * @param gracePeriod, grace period -> expressed in seconds
     * @return uint24, number of late Days

