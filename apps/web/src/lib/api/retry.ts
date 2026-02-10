export async function withRetry<T>(
  fn: () => Promise<T>,
  attempts = 3
): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    await new Promise(r => setTimeout(r, 300 * (4 - attempts)));
    return withRetry(fn, attempts - 1);
  }
}
