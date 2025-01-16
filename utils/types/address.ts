export interface AddressFormData {
  streetAddress: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface ActionResponse<T = unknown> {
  data?: T;
  success: boolean;
  message: string;
  errors?: string[];
}
