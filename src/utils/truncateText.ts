export default function truncateText(string: string, max: number) {
  return string.length > max ? string.slice(0, max - 1) + '...' : string;
}
