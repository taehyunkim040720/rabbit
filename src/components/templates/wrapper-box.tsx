import { HTMLAttributes, ReactNode } from 'react';

interface WrapperBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface WrapperBoxTitleProps {
  children: ReactNode;
}

interface WrapperBoxContentProps {
  children: ReactNode;
}

interface WrapperBoxBlockProps {
  children: ReactNode;
}

function WrapperBox({ children }: WrapperBoxProps) {
  return (
    <div className="border-primary bg-theme hover:border-hover grid h-72 cursor-pointer gap-6 rounded-lg border p-4 transition duration-200 hover:scale-95 hover:brightness-105">
      {children}
    </div>
  );
}

function WrapperBoxTitle({ children }: WrapperBoxTitleProps) {
  return (
    <h1 className="line-clamp-1 text-ellipsis text-lg font-bold">{children}</h1>
  );
}

function WrapperBoxContent({ children }: WrapperBoxContentProps) {
  return (
    <p className="line-clamp-1 text-ellipsis text-sm font-semibold">
      {children}
    </p>
  );
}

function WrapperBoxBlock({ children }: WrapperBoxBlockProps) {
  return (
    <div className="flex items-center justify-center bg-zinc-700 p-3">
      {'> ' + children}
    </div>
  );
}

export { WrapperBox, WrapperBoxTitle, WrapperBoxContent, WrapperBoxBlock };
