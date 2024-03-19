import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../../../prisma/prisma";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async session({ session }) {
            // Retrieve the user from the database using Prisma
            const user = await prisma.user.findUnique({
                where: { email: session.user.email },
            });

            // Store the user's ID in the session
            session.user = user

            return session;
        },

        async signIn({ profile }) {
            try {
                // Check if a user with the email already exists
                const user = await prisma.user.findUnique({
                    where: { email: profile.email },
                });

                if (!user) {
                    // If the user doesn't exist, create a new user
                    await prisma.user.create({
                        data: {
                            email: profile.email,
                            name: profile.name.toLowerCase(),
                            image: profile.picture,
                            // Add any other relevant user data here
                        },
                    });
                }

                return true;
            } catch (error) {
                console.error("Error checking if user exists:", error);
                return false;
            }
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        }
    },
});


export { handler as GET, handler as POST }