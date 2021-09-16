export function getLocalStorage<T>(key: string, defaultValue: T): T {
  let result: T;

  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      result = defaultValue;
    } else {
      result = JSON.parse(item);
    }
  } catch (e: any) {
    result = defaultValue;
  }

  return result;
}

export function setLocalStorage<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('[setLocalStorage] failed.');
  }
}
