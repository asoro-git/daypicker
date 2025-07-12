export function subtractDays(dateString: string, dayNum: number) {
  const rawDateString = new Date(dateString);
  rawDateString.setDate(rawDateString.getDate() - dayNum);
  const newDateString = rawDateString.toISOString().split("T")[0];
  return newDateString;
}

export function subtractMonths(customDateString: string, monthNum: number) {
  const rawDateString = new Date(customDateString);
  rawDateString.setMonth(rawDateString.getMonth() + monthNum);
  const newDateString = rawDateString.toISOString().split("T")[0];
  return newDateString;
}
