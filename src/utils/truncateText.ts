export default function truncateText(string: string, max: number) {
  const truncate = string;
  return truncate.length > max ? truncate.slice(0, max - 1) + '...' : truncate;
}
