import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
  DOMAIN_LOGIN_REDIRECT
} from '@/routes';

const { auth } = NextAuth(authConfig);

/**
 * Function that handles the authentication logic for a request.
 *
 * @param req - The request object containing information about the request.
 * @returns A response object or null, depending on the authentication logic.
 */
export default auth( req => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if(isAuthRoute){
    if(isLoggedIn){
      if (process.env.NODE_ENV !== 'development') {
        return Response.redirect(new URL(DOMAIN_LOGIN_REDIRECT))
      }
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }


  if(!isLoggedIn && !isPublicRoute){
    let callbackUrl = nextUrl.pathname;
    if(nextUrl.search){
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(new URL(
      `/auth/login?callbackUrl=${encodedCallbackUrl}`,
      nextUrl
    ));

    return null;
  }

})

//? Don't invoke middleware in this paths.
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}