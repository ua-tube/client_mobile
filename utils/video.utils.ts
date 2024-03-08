const formatNumbers = (v: number = 0, locale = 'uk') => Intl.NumberFormat(locale, { notation: 'compact' }).format(v)

export { formatNumbers }