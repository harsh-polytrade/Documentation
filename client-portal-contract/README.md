# Summary
Client Portal Contracts
-----------------------
	=> Used to upload invoices on smart contract and deals with the offer and pricing.
	Chainlink => It acts like an oracle to get price feed. 
	Pricing table =>
	 -> Pricing item are templates, min and max tenures are time that the payment of invoices will be done. 
	 -> Discount rate is like we will give only 97% of total invoice amount.
	 -> All these parameters can be updated/removed by owner also.
	Offer => 
	 -> Multiple lenders can come and give offer. Their offers will be validated(checkOfferValidity)
	 -> ReserveFund calculates fees when collection is done and offer is refunded
