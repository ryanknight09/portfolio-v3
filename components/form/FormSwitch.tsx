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

import { Switch } from '@/components/ui/switch';

interface Props {
  label: string;
  name: string;
  description?: string;
  className?: string;
}

export const FormSwitch = ({
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
      name='marketing_emails'
      render={({ field }) => (
        <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
          <div className='space-y-0.5'>
            <FormLabel className='text-base'>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </div>
          <FormControl>
            <Switch {...field} {...rest} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};