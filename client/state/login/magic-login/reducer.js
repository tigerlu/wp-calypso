/**
 * External dependencies
 */
import { combineReducers } from 'redux';
import emailValidator from 'email-validator';

/**
 * Internal dependencies
 */
import { createReducer } from 'state/utils';

import {
	CHECK_YOUR_EMAIL_PAGE,
	INTERSTITIAL_PAGE,
	LINK_EXPIRED_PAGE,
	REQUEST_FORM,
} from './constants';

import {
	DESERIALIZE,
	MAGIC_LOGIN_HANDLE_AUTH_TOKEN_FETCH,
	MAGIC_LOGIN_HANDLE_AUTH_TOKEN_RECEIVE,
	MAGIC_LOGIN_HIDE_REQUEST_FORM,
	MAGIC_LOGIN_HIDE_REQUEST_NOTICE,
	MAGIC_LOGIN_SET_INPUT_EMAIL_ADDRESS,
	MAGIC_LOGIN_SHOW_CHECK_YOUR_EMAIL_PAGE,
	MAGIC_LOGIN_SHOW_INTERSTITIAL_PAGE,
	MAGIC_LOGIN_SHOW_LINK_EXPIRED,
	MAGIC_LOGIN_SHOW_REQUEST_FORM,
	MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_ERROR,
	MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_FETCH,
	MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_SUCCESS,
	SERIALIZE,
} from 'state/action-types';

export const showingView = createReducer( null, {
	[ DESERIALIZE ]: () => null,
	[ SERIALIZE ]: () => null,
	[ MAGIC_LOGIN_HIDE_REQUEST_FORM ]: () => null,
	[ MAGIC_LOGIN_SHOW_CHECK_YOUR_EMAIL_PAGE ]: () => CHECK_YOUR_EMAIL_PAGE,
	[ MAGIC_LOGIN_SHOW_REQUEST_FORM ]: () => REQUEST_FORM,
	[ MAGIC_LOGIN_SHOW_INTERSTITIAL_PAGE ]: () => INTERSTITIAL_PAGE,
	[ MAGIC_LOGIN_SHOW_LINK_EXPIRED ]: () => LINK_EXPIRED_PAGE,
} );

export const isFetchingEmail = createReducer( false, {
	[ DESERIALIZE ]: () => false,
	[ SERIALIZE ]: () => false,
	[ MAGIC_LOGIN_HIDE_REQUEST_FORM ]: () => false,
	[ MAGIC_LOGIN_HIDE_REQUEST_NOTICE ]: () => false,
	[ MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_ERROR ]: () => false,
	[ MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_FETCH ]: () => true,
	[ MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_SUCCESS ]: () => false,
	[ MAGIC_LOGIN_HANDLE_AUTH_TOKEN_FETCH ]: () => false,
	[ MAGIC_LOGIN_HANDLE_AUTH_TOKEN_RECEIVE ]: () => false,
} );

export const isFetchingAuth = createReducer( false, {
	[ DESERIALIZE ]: () => false,
	[ SERIALIZE ]: () => false,
	[ MAGIC_LOGIN_HIDE_REQUEST_FORM ]: () => false,
	[ MAGIC_LOGIN_HANDLE_AUTH_TOKEN_FETCH ]: () => true,
	[ MAGIC_LOGIN_HANDLE_AUTH_TOKEN_RECEIVE ]: () => false,
} );

export const emailAddressFormInput = createReducer( '', {
	[ DESERIALIZE ]: () => '',
	[ SERIALIZE ]: () => '',
	[ MAGIC_LOGIN_HIDE_REQUEST_FORM ]: () => '',
	[ MAGIC_LOGIN_SET_INPUT_EMAIL_ADDRESS ]: ( state, { email } ) => email,
} );

export const emailAddressFormInputIsValid = createReducer( false, {
	[ DESERIALIZE ]: () => false,
	[ SERIALIZE ]: () => false,
	[ MAGIC_LOGIN_SET_INPUT_EMAIL_ADDRESS ]: ( state, { email } ) => {
		return (
			typeof email === 'string' &&
			emailValidator.validate( email )
		);
	},
} );

export const requestEmailError = createReducer( null, {
	[ DESERIALIZE ]: () => null,
	[ SERIALIZE ]: () => null,
	[ MAGIC_LOGIN_HIDE_REQUEST_FORM ]: () => null,
	[ MAGIC_LOGIN_HIDE_REQUEST_NOTICE ]: () => null,
	[ MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_ERROR ]: ( state, { error } ) => error,
	[ MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_FETCH ]: () => null,
	[ MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_SUCCESS ]: () => null,
	[ MAGIC_LOGIN_SET_INPUT_EMAIL_ADDRESS ]: () => null,
} );

export const requestedEmailSuccessfully = createReducer( false, {
	[ DESERIALIZE ]: () => false,
	[ SERIALIZE ]: () => false,
	[ MAGIC_LOGIN_HIDE_REQUEST_FORM ]: () => false,
	[ MAGIC_LOGIN_HIDE_REQUEST_NOTICE ]: () => false,
	[ MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_ERROR ]: () => false,
	[ MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_FETCH ]: () => false,
	[ MAGIC_LOGIN_REQUEST_LOGIN_EMAIL_SUCCESS ]: () => true,
} );

export const requestAuthError = createReducer( null, {
	[ DESERIALIZE ]: () => null,
	[ SERIALIZE ]: () => null,
	[ MAGIC_LOGIN_HANDLE_AUTH_TOKEN_FETCH ]: () => null,
	[ MAGIC_LOGIN_HANDLE_AUTH_TOKEN_RECEIVE ]: ( state, { error } ) => error,
} );

export const requestAuthSuccess = createReducer( null, {
	[ DESERIALIZE ]: () => null,
	[ SERIALIZE ]: () => null,
	[ MAGIC_LOGIN_HANDLE_AUTH_TOKEN_FETCH ]: () => null,
	[ MAGIC_LOGIN_HANDLE_AUTH_TOKEN_RECEIVE ]: ( state, { status } ) => status
} );

export default combineReducers( {
	emailAddressFormInput,
	emailAddressFormInputIsValid,
	isFetchingEmail,
	requestAuthError,
	requestAuthSuccess,
	requestEmailError,
	requestedEmailSuccessfully,
	showingView,
} );
