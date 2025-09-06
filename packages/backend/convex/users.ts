import { v } from "convex/values";
import { query, mutation } from "./_generated/server.js";

export const getmany = query({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query("users").collect();
        return users;
    },
});

export const addUser = mutation({
    args: {
    },
    handler: async (ctx, args) => {
        const userId = await ctx.db.insert("users", {
            name: "Antonio",
            createdAt: Date.now()
        });
        return userId;
    },
}); 