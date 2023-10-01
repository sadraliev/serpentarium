import { ISO8601 } from '@/types';

export function isValidISO8601(date: unknown): boolean {
  if (typeof date !== 'string') {
    throw new Error('Argument should be a string');
  }

  if (!date.trim()) {
    throw new Error('Value cannot be empty or whitespace');
  }
  const regex =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(([+-]\d{2}:\d{2})|Z)?$/;
  return regex.test(date);
}

export function toFormatISO(date: string): ISO8601 {
  if (!isValidISO8601(date)) {
    throw new Error('invalid format. use ISO 8601');
  }
  return date as ISO8601;
}
