"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  businessType: z.string().min(1, "Please select a business type."),
  whatsapp: z.string().optional(),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    businessType?: string[];
    whatsapp?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    businessType: formData.get("businessType"),
    whatsapp: formData.get("whatsapp"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Please check the fields.",
    };
  }

  try {
    // Here you would typically send an email, save to a database, etc.
    console.log("Form data submitted successfully:", validatedFields.data);

    return { message: "Thank you! We've received your message and will be in touch soon." };
  } catch (e) {
    return {
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
