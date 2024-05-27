export async function middleware() {}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/profile",
    "/add/:path*",
    "/notices/favorites",
    "/notices/own",
  ],
};
