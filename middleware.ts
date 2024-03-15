import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/","/donation","/adoption","/shop","/about"],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
