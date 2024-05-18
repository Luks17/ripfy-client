export function hasError(errors: boolean[]) {
  let hasError = false;

  for (let err of errors) {
    hasError = err;
    if (hasError) break;
  }

  return hasError;
}

export function resetErrorStateFromField(old: boolean[], index: number) {
  old[index] = false;
  return old;
}
