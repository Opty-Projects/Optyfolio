/** Groups items by a stringified property value, preserving insertion order. */
export const groupBy = <T>(items: T[], key: keyof T): Record<string, T[]> =>
  items.reduce<Record<string, T[]>>((acc, item) => {
    const group = String(item[key])
    ;(acc[group] ??= []).push(item)
    return acc
  }, {})
