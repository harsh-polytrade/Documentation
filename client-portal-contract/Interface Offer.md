## `IOffer`
Interface for Offer Contract

## OfferCreated
### `OfferCreated(uint256 offerId, bytes2 pricingId)`
     * @dev Emitted when new offer is created

## ReserveRefunded
### `ReserveRefunded(uint256 offerId, uint256 refundedAmount)`
     * @dev Emitted when Reserve is refunded
## NewPricingTableContract
### `NewPricingTableContract(       address oldPricingTableAddress,       address newPricingTableAddress)`
     * @dev Emitted when PricingTable Address is updated

## NewPriceFeedContract
### `NewPriceFeedContract(address oldPriceFeedAddress,address newPriceFeedAddress)`
     * @dev Emitted when PriceFeed Address is updated

## NewTreasuryAddress
### `NewTreasuryAddress(address oldTreasuryAddress,       address newTreasuryAddress)`
     * @dev Emitted when Treasury Address is updated

## NewLenderPoolAddress
### `NewLenderPoolAddress(address oldLenderPoolAddress,address newLenderPoolAddress)`
     * @dev Emitted when LenderPool Address is updated

## OracleUsageUpdated
### `OracleUsageUpdated(bool status)`
     * @dev Emitted when Oracle usage is activated or deactivated

## checkOfferValidity
### `checkOfferValidity(bytes2 pricingId, uint8 tenure, uint16 advanceFee, uint16 discountFee, uint16 factoringFee, uint256 invoiceAmount, uint256 availableAmount) → bool` (external)

     * @notice check if params fit with the pricingItem
     * @dev checks every params and returns a custom Error
     * @param pricingId, Id of the pricing Item
     * @param tenure, tenure expressed in number of days
     * @param advanceFee, ratio for the advance Fee
     * @param discountFee, ratio for the discount Fee
     * @param factoringFee, ratio for the factoring Fee
     * @param invoiceAmount, amount for the invoice
     * @param availableAmount, amount for the available amount

### `createOffer(bytes2 pricingId, struct OfferParams params) → uint256` (public)

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

### `reserveRefund(uint256 offerId, uint256 dueDate, uint16 lateFee)` (public)

     * @notice Send the reserve Refund to the treasury
     * @dev checks if Offer exists and if not refunded yet
     * @dev only `Owner` can call reserveRefund
     * @dev emits OfferReserveRefunded event
     * @param offerId, Id of the offer
     * @param dueDate, due date
     * @param lateFee, late fees (ratio)

## InvalidTenure
### `InvalidTenure(uint16 tenure, uint16 minTenure, uint16 maxTenure)`
    Tenure is not within minimum and maximum authorized
    @param tenure, actual tenure
    @param minTenure, minimum tenure
    @param maxTenure, maximum tenure



## InvalidAdvanceFee
### `InvalidAdvanceFee(uint16 advanceFee, uint16 maxAdvancedRatio)`
    AdvanceFee is higher than the maxAdvancedRatio
    @param advanceFee, actual advanceFee
    @param maxAdvancedRatio, maximum advanced ratio



## InvalidDiscountFee
### `InvalidDiscountFee(uint16 discountFee, uint16 minDiscountFee)`
    DiscountFee is lower than the minDiscountFee
    @param discountFee, actual discountFee
    @param minDiscountFee, minimum discount fee

## InvalidFactoringFee
### `InvalidFactoringFee(uint16 factoringFee, uint16 minFactoringFee)`
    FactoringFee is lower than the minDiscountFee
    @param factoringFee, actual factoringFee
    @param minFactoringFee, minimum factoring fee

## InvalidInvoiceAmount
### `InvalidInvoiceAmount(uint invoiceAmount, uint minAmount, uint maxAmount)`
    InvoiceAmount is not within minimum and maximum authorized
    @param invoiceAmount, actual invoice amount
    @param minAmount, minimum invoice amount
    @param maxAmount, maximum invoice amount    

## InvalidAvailableAmount
### `InvalidAvailableAmount(uint availableAmount, uint invoiceAmount)`
    Available Amount is higher than Invoice Amount
    @param availableAmount, actual available amount
    @param invoiceAmount, actual invoice amount

## OfferItem
### `OfferItem`
    uint advancedAmount

    uint reserve

    uint64 disbursingAdvanceDate

    OfferParams params

    OfferRefunded refunded

## OfferParams
### `OfferParams`
    uint8 gracePeriod

    uint16 tenure

    uint16 factoringFee

    uint16 discountFee

    uint16 advanceFee

    address stableAddress

    uint invoiceAmount

    uint availableAmount

## OfferRefunded
### `OfferRefunded`
    uint16 lateFee

    uint64 dueDate

    uint24 numberOfLateDays

    uint totalCalculatedFees

    uint netAmount

