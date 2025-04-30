import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const certificates = pgTable("certificates", {
  id: serial("id").primaryKey(),
  certificateNumber: text("certificate_number").notNull().unique(),
  studentName: text("student_name").notNull(),
  course: text("course").notNull(),
  percentage: text("percentage").notNull()
});

export const insertCertificateSchema = createInsertSchema(certificates).pick({
  certificateNumber: true,
  studentName: true,
  course: true,
  percentage: true
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertCertificate = z.infer<typeof insertCertificateSchema>;
export type Certificate = typeof certificates.$inferSelect;
