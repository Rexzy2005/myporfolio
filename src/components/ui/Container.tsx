import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className, id }: ContainerProps) {
  return (
    <section
      id={id}
      className={cn('px-6 sm:px-8 lg:px-12 py-[80px] md:py-[112px] max-w-[1200px] mx-auto', className)}
    >
      {children}
    </section>
  );
}
