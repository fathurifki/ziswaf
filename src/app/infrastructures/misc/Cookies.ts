import Cookies from "js-cookie";

// TOKEN CREDENTIAL
const tokenKey = `${process.env.NODE_ENV}_admin_access_token`;
const expiredTokenKey = `${process.env.NODE_ENV}_admin_expired_token`;

export const getToken = () => Cookies.get(tokenKey) || "";

export const getExpired = () => Cookies.get(expiredTokenKey);

export const setCredential = ({ token, expired }:any): void => {
  Cookies.set(tokenKey, token);
  Cookies.set(expiredTokenKey, expired);
};

export const removeAuthCredential = () => {
  Cookies.remove(tokenKey);
  Cookies.remove(expiredTokenKey);
};
