import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const addressSchema = z.object({
  streetAddress: z.string().min(1, "Street address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  country: z.string().min(1, "Country is required"),
});

export type AddressFormValues = z.infer<typeof addressSchema>;

export const addressFormResolver = zodResolver(addressSchema);
