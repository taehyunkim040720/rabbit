import { SizeLiteral, SizeVariants } from '@/types';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variants?: SizeLiteral;
}

const inputVariantFactory: SizeVariants = {
  sm: 'text-sm px-3 py-1',
  default: 'text-md px-3 py-2 text-md',
  lg: 'text-lg px-3 py-2'
};

function Input({ className, variants = 'default', ...props }: InputProps) {
  const inputVariant = inputVariantFactory[variants];
  return (
    <input
      className={`${inputVariant} ${className} min-w-80 rounded-md border border-indigo-800 bg-transparent py-2 outline-none transition-colors duration-300 focus:border-indigo-600`}
      {...props}
    />
  );
}

export { Input };
