## `IOffer`


## OfferCreated
### `OfferCreated(uint256 offerId, bytes2 pricingId)`
Emitted when new offer is created

## ReserveRefunded
### `ReserveRefunded(uint256 offerId, uint256 refundedAmount)`
Emitted when Reserve is refunded
## NewPricingTableContract
### `NewPricingTableContract(       address oldPricingTableAddress,       address newPricingTableAddress)`
Emitted when PricingTable Address is updated

## NewPriceFeedContract
### `NewPriceFeedContract(address oldPriceFeedAddress,address newPriceFeedAddress)`
 Emitted when PriceFeed Address is updated

## NewTreasuryAddress
### `NewTreasuryAddress(address oldTreasuryAddress,       address newTreasuryAddress)`
Emitted when Treasury Address is updated

## NewLenderPoolAddress
### `NewLenderPoolAddress(address oldLenderPoolAddress,address newLenderPoolAddress)`
 Emitted when LenderPool Address is updated

## OracleUsageUpdated
### `OracleUsageUpdated(bool status)`
Emitted when Oracle usage is activated or deactivated

## checkOfferValidity
### `checkOfferValidity(bytes2 pricingId, uint8 tenure, uint16 advanceFee, uint16 discountFee, uint16 factoringFee, uint256 invoiceAmount, uint256 availableAmount) → bool` (external)

check if params fit with the pricingItem

checks every params and returns a custom Error

### `createOffer(bytes2 pricingId, struct OfferParams params) → uint256` (public)

Create an offer, check if it fits pricingItem requirements and send Advance to treasury

calls \_checkParams and returns Error if params don't fit with the pricingID
only `Owner` can create a new offer
emits OfferCreated event
send Advance Amount to treasury

### `reserveRefund(uint256 offerId, uint256 dueDate, uint16 lateFee)` (public)

Send the reserve Refund to the treasury

checks if Offer exists and if not refunded yet
only `Owner` can call reserveRefund
emits OfferReserveRefunded event

## InvalidTenure
### `InvalidTenure(uint16 tenure, uint16 minTenure, uint16 maxTenure)`
Tenure is not within minimum and maximum authorized

## InvalidAdvanceFee
### `InvalidAdvanceFee(uint16 advanceFee, uint16 maxAdvancedRatio)`
 AdvanceFee is higher than the maxAdvancedRatio

## InvalidDiscountFee
### `InvalidDiscountFee(uint16 discountFee, uint16 minDiscountFee)`
DiscountFee is lower than the minDiscountFee
## InvalidFactoringFee
### `InvalidFactoringFee(uint16 factoringFee, uint16 minFactoringFee)`
FactoringFee is lower than the minDiscountFee

## InvalidInvoiceAmount
### `InvalidInvoiceAmount(uint invoiceAmount, uint minAmount, uint maxAmount)`
InvoiceAmount is not within minimum and maximum authorized

## InvalidAvailableAmount
### `InvalidAvailableAmount(uint availableAmount, uint invoiceAmount)`
Available Amount is higher than Invoice Amount

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

