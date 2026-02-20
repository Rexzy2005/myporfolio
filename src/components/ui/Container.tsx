import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className, id }: ContainerProps) {
  return (
    <section id={id} className={cn('px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl mx-auto', className)}>
      {children}
    </section>
  );
}
