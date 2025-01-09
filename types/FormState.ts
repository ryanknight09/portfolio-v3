export interface FormState<T = unknown> {
  data?: T;
  success: boolean;
  message: string;
  errors?: string[];
}
