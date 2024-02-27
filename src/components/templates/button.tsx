import { SizeLiteral, SizeVariants } from '@/types';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variants?: SizeLiteral;
}

const buttonVariantFactory: SizeVariants = {
  sm: 'text-sm p-2 font-bold',
  default: 'text-md px-4 py-2 font-bold',
  lg: 'text-lg px-6 py-3 font-bold'
};

function Button({
  variants = 'default',
  children,
  onClick,
  ...props
}: ButtonProps) {
  const buttonVariant = buttonVariantFactory[variants];
  return (
    <button
      onClick={onClick}
      {...props}
      className={`${buttonVariant} bg-primary hover:bg-hover flex h-fit w-fit items-center justify-center rounded-md transition`}
    >
      {children}
    </button>
  );
}

export { Button };
