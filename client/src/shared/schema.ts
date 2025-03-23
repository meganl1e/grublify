import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message"),
});

export const insertWaitlistSchema = createInsertSchema(waitlist).extend({
  // email: z.string().email(),
  email: z.string().min(2),
  name: z.string().min(2),
  message: z.string().optional()
});

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = typeof waitlist.$inferSelect;
