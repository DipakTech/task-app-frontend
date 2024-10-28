import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(50, "Username cannot exceed 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});
