import { createAction } from "@reduxjs/toolkit";

// export const androidAction = () => ({ type: ANDROID });
// export const iphoneAction = () => ({ type: IPHONE });
export const androidAction = createAction('android')
export const iphoneAction = createAction('iphone')

// androidAction.toString = () => 'android'
