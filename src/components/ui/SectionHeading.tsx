import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  tag,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={cn('mb-[56px]', align === 'center' && 'text-center', className)}
    >
      {tag && (
        <p className={cn('text-[12px] text-lead tracking-[0.24px] mb-4 font-[400] uppercase', align === 'center' && 'justify-center')}>
          {tag}
        </p>
      )}
      <h2
        className="text-[clamp(32px,5vw,49px)] leading-[1.15] text-starlight"
        style={{ fontWeight: 360, letterSpacing: '0.01em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[16px] text-lead leading-[1.5] tracking-[0.16px] max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
