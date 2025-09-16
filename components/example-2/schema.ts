import { z } from "zod";
import DOMPurify from "dompurify";

// Simple Zod schema for form validation
export const formSchema = z.object({
  // Name: Required, must be at least 2 characters
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),

  // Email: Must be a valid email format
  email: z.email({ message: "Please enter a valid email address" }),

  // Content: Required, with length constraints
  content: z
    .string()
    .min(5, { message: "Content must be at least 5 characters long" })
    .max(1000, { message: "Content cannot exceed 1000 characters" })
    // Sanitize HTML content using DOMPurify
    .transform((val) => {
      // DOMPurify removes XSS attacks while preserving safe HTML
      return DOMPurify.sanitize(val, {
        // Configuration options
        ALLOWED_TAGS: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "p",
          "b",
          "i",
          "em",
          "strong",
          "a",
          "ul",
          "ol",
          "li",
        ],
        ALLOWED_ATTR: ["href", "class"],
        // Prevent usage of DOM clobbering
        SANITIZE_DOM: true,
        // Don't allow data: URIs as they can be used for XSS
        ALLOW_DATA_ATTR: false,
      });
    }),
});

// Type for the form data, inferred from the schema
export type FormData = z.infer<typeof formSchema>;
export function validateFormData(data: unknown) {
  const result = formSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data, errors: null };
  } else {
    return { success: false, data: null, errors: result.error };
  }
}
