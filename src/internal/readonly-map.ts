type Key = string | number | symbol;

/**
 * Inverts the keys and values of an object.
 * @param object The object to invert.
 * @returns The inverted object. This is returned as a Map to support object keys that are not
 * strings.
 */
export function invert<K extends Key, V extends Key>(object: Record<K, V>): ReadonlyMap<V, K> {
  const map = new Map<V, K>();

  for (const key in object) {
    map.set(object[key], key);
  }

  return map;
}
