const FA_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'] as const

/**
 * Convert Western (0-9) digits inside any string/number to Persian (۰-۹) digits.
 * Non-digit characters are left untouched.
 */
export const toFarsiDigits = (input: string | number): string =>
  String(input).replace(/\d/g, (d) => FA_DIGITS[Number(d)])

/**
 * Convert a number to a zero-padded Persian-digit string of the given length.
 * Useful for index labels like ۰۱، ۰۲، ۰۳.
 */
export const toFarsiIndex = (n: number, length = 2): string =>
  toFarsiDigits(String(n).padStart(length, '0'))
