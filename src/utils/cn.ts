import { clsx, type ClassValue } from 'clsx';

/**
 * Conditional class-name joiner. Deliberately plain clsx: this project's
 * custom type tokens (text-small, text-body, …) would be mis-parsed as colours
 * by tailwind-merge, silently dropping classes.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
