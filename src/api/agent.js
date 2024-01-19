// API endpoints for premium purchase
export const BUY_PREMIUM_ENDPOINT = "/api/payment/buypremium";
export const UPDATE_PREMIUM_ENDPOINT = "/api/payment/updatepremiumstatus";
export const UPDATE_STATUS_FAILED = "/api/payment/updatepremiumstatustofailed";
export const DOWNLOAD_EXPENSE_ENDPOINT = "/api/premium/downloadexpenses";
export const GET_DOWNLOADED_FILES = "/api/premium/alldownlaodlinks";

// API endpoints for EXPENSES
export const ADD_EXPENSE_ENDPOINT = "/api/user/addexpense";
export const DELETE_EXPENSE_ENDPOINT = "/api/user/deleteexpense";
export const GET_EXPENSES_ENDPOINT = "/api/user/getexpenses?rowsperpage=10&page=1";

// API endpoints for premium user 
export const GET_LEADERBOARD_DATA = "/api/premium/getleaderboard";

// API endpoints for authentication
export const FORGOT_PWD_ENDPOINT = "/api/auth/forgotpassword";
