import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/photoservice",
    "/hotspot",
    "/keyword-ai",
    "/matrix-ai",
    "/matrix-ai/information",
    "/liveservice",
    "/consultant",
    "/test",
    "/tiktok",
    "/privacy-policy",
    "/terms-of-service",
  ],
  debug: true,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
