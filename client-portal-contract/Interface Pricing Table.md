## `IPricingTable`
Interface for PricingTable
## addPricingItem
### `addPricingItem(bytes2 pricingId, uint8 minTenure, uint8 maxTenure, uint16 maxAdvancedRatio, uint16 minDiscountRange, uint16 minFactoringFee, uint256 minAmount, uint256 maxAmount)` (external)
     * @notice Add a Pricing Item to the Pricing Table
     * @dev Only Owner is authorized to add a Pricing Item
     * @param pricingId, pricingId (hex format)
     * @param minTenure, minimum tenure expressed in percentage
     * @param maxTenure, maximum tenure expressed in percentage
     * @param maxAdvancedRatio, maximum advanced ratio expressed in percentage
     * @param minDiscountRange, minimum discount range expressed in percentage
     * @param minFactoringFee, minimum Factoring fee expressed in percentage
     * @param minAmount, minimum amount
     * @param maxAmount, maximum amount

Add a Pricing Item to the Pricing Table

Only Owner is authorized to add a Pricing Item

## updatePricingItem
### `updatePricingItem(bytes2 pricingId, uint8 minTenure, uint8 maxTenure, uint16 maxAdvancedRatio, uint16 minDiscountRange, uint16 minFactoringFee, uint256 minAmount, uint256 maxAmount, bool status)` (external)

     * @notice Add a Pricing Item to the Pricing Table
     * @dev Only Owner is authorized to add a Pricing Item
     * @param pricingId, pricingId (hex format)
     * @param minTenure, minimum tenure expressed in percentage
     * @param maxTenure, maximum tenure expressed in percentage
     * @param maxAdvancedRatio, maximum advanced ratio expressed in percentage
     * @param minDiscountRange, minimum discount range expressed in percentage
     * @param minFactoringFee, minimum Factoring fee expressed in percentage
     * @param minAmount, minimum amount
     * @param maxAmount, maximum amount

## removePricingItem
### `removePricingItem(bytes2 id)` (external)

     * @notice Remove a Pricing Item from the Pricing Table
     * @dev Only Owner is authorized to add a Pricing Item
     * @param id, id of the pricing Item

## getPricingItem
### `getPricingItem(bytes2 id) → struct IPricingTable.PricingItem` (external)

     * @notice Returns the pricing Item
     * @param id, id of the pricing Item
     * @return returns the PricingItem (struct)

## isPricingItemValid
### `isPricingItemValid(bytes2 id) → bool` (external)
     * @notice Returns if the pricing Item is valid
     * @param id, id of the pricing Item
     * @return returns boolean if pricing is valid or not

Returns if the pricing Item is valid

## NewPricingItem
### `NewPricingItem(struct IPricingTable.PricingItem id)`


### `UpdatedPricingItem(struct IPricingTable.PricingItem id)`

### `RemovedPricingItem(bytes2 id)`

## PricingItem
### `PricingItem`

uint8 minTenure

uint8 maxTenure

uint16 maxAdvancedRatio

uint16 minDiscountFee

uint16 minFactoringFee

uint256 minAmount

uint256 maxAmount