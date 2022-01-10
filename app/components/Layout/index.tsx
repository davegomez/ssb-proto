import { ReactNode } from 'react';
import { Battery, Carrier, Time } from '~/components/icons';

interface Props {
  children?: ReactNode;
  theme: string;
}

export default function Layout({ children, theme }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center h-[20px] pt-[3px] px-[4px] pb-[1px]">
        <Carrier theme={theme} />
        <Time theme={theme} />
        <Battery theme={theme} />
      </div>
      {children}
    </div>
  );
}
