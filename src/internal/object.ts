/**
 * This function is like a standard invert function for an object, except it's specific to arrays.
 * This inverts an object's numerical values to be the keys for its values. It requires the object
 * to meet a few conditions, or else it will raise an error. conditions:
 *
 * - The object's values must be integers.
 * - The object's values must not be negative
 * - The object's values must not contain any duplicates.
 *
 * @param object - The object to invert.
 * @returns An array of the object's keys, in the order of their values.
 */
export function invertToArray<K extends string, V extends number>(
  object: Record<K, V>,
): (K | undefined)[] {
  const values: V[] = Object.values(object);

  if (values.length === 0) {
    return [];
  }

  if (!values.every((value) => Number.isInteger(value))) {
    throw new TypeError("Object values must be integers.");
  }

  if (values.some((value) => value < 0)) {
    throw new TypeError("Object values may not be negative.");
  }

  if (values.length !== new Set(values).size) {
    throw new TypeError("Object values must not contain duplicates.");
  }

  const indexedKeys: K[] = [];

  for (const key in object) {
    indexedKeys[object[key]] = key;
  }

  return indexedKeys;
}
