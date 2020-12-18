export const getManagePurchaseUrlFor = (
	targetSiteSlug: string,
	targetPurchaseId: string | number
): string => `/purchases/subscriptions/${ targetSiteSlug }/${ targetPurchaseId }`;

export const getConfirmCancelDomainUrlFor = (
	targetSiteSlug: string,
	targetPurchaseId: string | number
): string =>
	`/purchases/subscriptions/${ targetSiteSlug }/${ targetPurchaseId }/confirm-cancel-domain`;

export const getCancelPurchaseUrlFor = (
	targetSiteSlug: string,
	targetPurchaseId: string | number
): string => `/purchases/subscriptions/${ targetSiteSlug }/${ targetPurchaseId }/cancel`;

export const getPurchaseListUrlFor = ( targetSiteSlug: string ): string =>
	`/purchases/subscriptions/${ targetSiteSlug }`;

export const getAddPaymentMethodUrlFor = (
	targetSiteSlug: string,
	targetPurchase: { id: string | number }
): string => `/purchases/subscriptions/${ targetSiteSlug }/${ targetPurchase }/payment-method/add`;

export const getAddNewPaymentMethod = ( targetSiteSlug: string ): string =>
	`/purchases/add-payment-method/${ targetSiteSlug }`;

export const getPaymentMethodsUrlFor = ( targetSiteSlug: string ): string =>
	`/purchases/payment-methods/${ targetSiteSlug }`;

export const getChangePaymentMethodUrlFor = (
	targetSiteSlug: string,
	targetPurchase: { id: string | number },
	targetCardId: { id: string | number }
): string =>
	`/purchases/subscriptions/${ targetSiteSlug }/${ targetPurchase }/payment-method/change/${ targetCardId }`;

export const getReceiptUrlFor = (
	targetSiteSlug: string,
	targetReceiptId: string | number
): string => `/purchases/billing-history/${ targetSiteSlug }/${ targetReceiptId }`;

export const getBillingHistoryUrlFor = ( targetSiteSlug: string ): string =>
	`/purchases/billing-history/${ targetSiteSlug }`;
