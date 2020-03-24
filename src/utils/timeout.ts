export function timeout(time: number): Promise<void> {
  return new Promise(res => {
    setTimeout(() => {
      res();
    }, time);
  });
}

export function timeoutPromise<T>(
  promise: Promise<T>,
  time: number,
  defaultValue: T,
  failCallback: () => Promise<any>
): Promise<T> {
  return new Promise<T>(res => {
    let resolved = false;
    setTimeout(() => {
      if (!resolved) {
        resolved = true;
        failCallback().then(() => res(defaultValue));
      }
    }, time);

    promise.then(items => {
      if (!resolved) {
        resolved = true;
        res(items);
      }
    });
  });
}
