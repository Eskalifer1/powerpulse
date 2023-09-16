export function removeDuplicateStrings(
  firstArray: string[],
  secondArray: string[]
): string[] {
  const uniqueValues = new Set(secondArray);

  // Фільтруємо перший масив, залишаючи тільки ті значення, яких немає в uniqueValues
  const result = firstArray.filter((item) => !uniqueValues.has(item));

  return result;
}
