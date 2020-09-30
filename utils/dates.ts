import { format } from 'date-fns';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return format(date, 'MMM d, yyyy');
}
