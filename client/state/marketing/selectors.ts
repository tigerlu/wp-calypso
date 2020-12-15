/**
 * Internal Dependencies
 */
import type { AppState } from 'calypso/types';
import { getVariationForUser } from 'calypso/state/experiments/selectors';

export function isTreatmentOneClickTest( state: AppState ): boolean {
	return 'treatment' === getVariationForUser( state, 'one_click_premium_plan_upgrade_v3' );
}
