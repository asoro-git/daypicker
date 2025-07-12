export type Holiday = {
  date: string;
  name: string;
};
export async function getHolidays(year: number): Promise<Holiday[]> {
  const res = await fetch(
    `https://date.nager.at/api/v3/PublicHolidays/${year}/HK`,
    { cache: "force-cache" }, // ✅ cache response on server
  );

  if (!res.ok) throw new Error("Failed to fetch");
  const data = (await res.json()) as Holiday[];
  return data;
}
