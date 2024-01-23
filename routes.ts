/**
 * An array of routes that are public.
 * These routes don't require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/gallery",
  "/contact",
  "/shop",
  "/auth/verification",
]

/**
 * An array of routes to authentication
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/reset-password"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used fro API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/'
export const DOMAIN_LOGIN_REDIRECT = 'https://aholi.shop'