'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  description?: string;
}

export const FormInput = ({
  label,
  name,
  description,
  className,
  ...rest
}: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={''}
      render={({ field }) => (
        <FormItem className={cn(rest.type, className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...rest} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
