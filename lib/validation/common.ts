export function hasError(errors: boolean[]) {
  let hasError = false;

  for (const err of errors) {
    hasError = err;
    if (hasError) break;
  }

  return hasError;
}
