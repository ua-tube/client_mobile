const formatNumbers = (v: number = 0, locale = 'en') =>
	Intl.NumberFormat(locale, { notation: 'compact' }).format(v)

export { formatNumbers }