export function paginate<T>(items: T[], page: number, itemsPerPage: number) {
  const fromIndex = (page - 1) * itemsPerPage;
  const toIndex = page * itemsPerPage;
  return items.slice(fromIndex, toIndex);
}
