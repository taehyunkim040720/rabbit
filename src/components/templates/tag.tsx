import { HTMLAttributes, ReactNode } from 'react';

interface TagProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'onClick' | 'className'> {
  children: ReactNode;
}

function Tag({ children, className, onClick = () => {} }: TagProps) {
  return (
    <div
      onClick={onClick}
      className={`hover:bg-hover flex h-6 w-fit cursor-pointer items-center justify-center rounded-md border px-3 py-1 text-sm font-semibold transition duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

export { Tag };
