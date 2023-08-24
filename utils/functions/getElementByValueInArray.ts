export const getElementByValueInArray = <T>(
  array: T[],
  id: string,
  field: keyof T
): T | undefined => {
  return array.find((task) => task[field] === id);
};
