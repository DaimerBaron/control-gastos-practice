export const currencyFormat = (amount: number) => {
    return new Intl.NumberFormat('es-CO', { style: "currency", currency: 'COP' }).format(amount)
}


export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: "numeric", weekday: "long", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat('es-CO', options).format(date);
}