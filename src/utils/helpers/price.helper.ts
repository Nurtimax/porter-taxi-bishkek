export const formatPrice = (amount: number, currency: string = "сом") => {
  return new Intl.NumberFormat("ky-KG", {
    style: "currency",
    currency: "KGS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace("KGS", currency);
};
