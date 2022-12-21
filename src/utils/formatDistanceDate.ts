import formatDistance from 'date-fns/formatDistance';

export default function formatDistanceDate(date: string) {
  if (date === '') return date;
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
}
