import { ReactNode } from 'react';

function GridTemplate({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
}

export { GridTemplate };
