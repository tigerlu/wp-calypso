/**
 * External dependencies
 */
import page from 'page';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslate } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { addItems } from 'calypso/lib/cart/actions';
import config from 'calypso/config';
import { hasDomainInCart } from 'calypso/lib/cart-values/cart-items';
import {
	GOOGLE_WORKSPACE_BUSINESS_STARTER_YEARLY,
	GSUITE_BASIC_SLUG,
} from 'calypso/lib/gsuite/constants';
import GSuiteUpsellCard from './gsuite-upsell-card';
import HeaderCake from 'calypso/components/header-cake';
import { getSelectedSiteSlug } from 'calypso/state/ui/selectors';

const GSuiteUpgrade = ( { cart, domain, selectedSiteSlug } ) => {
	const handleAddEmailClick = ( cartItems ) => {
		addItems( cartItems );

		page( `/checkout/${ selectedSiteSlug }` );
	};

	const handleGoBack = () => {
		page( `/domains/add/${ selectedSiteSlug }` );
	};

	const handleSkipClick = () => {
		page( `/checkout/${ selectedSiteSlug }` );
	};

	useEffect( () => {
		if ( cart && cart.hasLoadedFromServer && ! hasDomainInCart( cart, domain ) ) {
			// Should we handle this more gracefully?
			page( `/domains/add/${ selectedSiteSlug }` );
		}
	}, [ cart, domain, selectedSiteSlug ] );

	const translate = useTranslate();

	const productSlug = config.isEnabled( 'google-workspace-migration' )
		? GOOGLE_WORKSPACE_BUSINESS_STARTER_YEARLY
		: GSUITE_BASIC_SLUG;

	return (
		<div>
			<HeaderCake onClick={ handleGoBack }>
				{ translate( 'Register %(domain)s', { args: { domain } } ) }
			</HeaderCake>

			<GSuiteUpsellCard
				domain={ domain }
				productSlug={ productSlug }
				onSkipClick={ handleSkipClick }
				onAddEmailClick={ handleAddEmailClick }
			/>
		</div>
	);
};

export default connect( ( state ) => ( {
	selectedSiteSlug: getSelectedSiteSlug( state ),
} ) )( GSuiteUpgrade );
