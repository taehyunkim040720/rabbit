import { SizeLiteral, SizeVariants } from '@/types';
import { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  variants?: SizeLiteral;
}

const inputVariantFactory: SizeVariants = {
  sm: 'text-sm px-2 py-1',
  default: 'text-md px-4 py-2',
  lg: 'text-lg px-5 py-2'
};

function Input({ className, variants = 'default', ...props }: InputProps) {
  const inputVariant = inputVariantFactory[variants];
  return (
    <input
      className={`${inputVariant} ${className} rounded-md border border-sky-800 bg-transparent px-4 py-2 outline-none transition-colors duration-300 focus:border-sky-600`}
      {...props}
    />
  );
}

export { Input };
