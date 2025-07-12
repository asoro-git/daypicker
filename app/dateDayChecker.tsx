import { subtractDays } from "@/app/subtractDates";
import { getHolidays } from "@/app/getHolidays";
const data = await getHolidays(2025);
const mapdata = data.map((h) => h.date);
const dataMap = data.map((h) => [h.date, h.name]);
const dataObj = Object.fromEntries(dataMap);
console.log(mapdata);
export function checkWeekend(customDate: string) {
  let days: { date: string; weekday: string }[] = [];
  function recursion(customDate: string) {
    let customDateObj = new Date(customDate);
    const isWeekend = [0, 6].includes(customDateObj.getDay());
    days.push({
      date: customDate,
      weekday: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][customDateObj.getDay()],
    });
    if (isWeekend) {
      console.log(subtractDays(customDate, 1));
      return recursion(subtractDays(customDate, 1));
    } else {
      if (!checkPublicHolidays(customDate)) {
        console.log(customDate);
        const output = days;
        days = [];
        return (
          <ol>
            {output.map((i, key) => {
              if (key > 0) {
                return (
                  <li key={key} className="text-center">
                    {key} day{Math.abs(key) > 1 ? "s" : ""} before it is{" "}
                    <strong>{i.date}</strong>, which is{" "}
                    {i.weekday.split(" ").length > 1 ? "the" : "a"}{" "}
                    <strong>{i.weekday}</strong>
                  </li>
                );
              }
            })}
          </ol>
        );
      }
      days.push({ date: customDate, weekday: dataObj[customDate] });
      return recursion(subtractDays(customDate, 1));
    }
  }
  return recursion(customDate);
}
//
function checkPublicHolidays(customDate: string) {
  return mapdata.includes(customDate);
}
//   return "";
// }
//   customDate: string,
//   output: { date: string; weekday: string }[],
// ) {
//   const res = await fetch(
//     `https://date.nager.at/api/v3/PublicHolidays/${new Date(customDate).getFullYear()}/HK`,
//   );
//   if (!res.ok) {
//     throw new Error("failed to fetch holidays");
//   }
//   const holidays = (await res.json()) as { date: string; name: string }[];
//   const holidayList = holidays.map((i) => {
//     return [i.date, i.name];
//   });
//   const holidayDict = Object.fromEntries(holidayList);
//   function recursion(customDate: string) {
//     const customDateObj = new Date(customDate);
//     output.push({
//       date: customDate,
//       weekday: customDateObj.getDay().toString(),
//     });
//     if (holidayDict[customDate]) {
//       return recursion(subtractDays(customDate, 1));
//     } else {
//       return JSON.stringify(output, null, 2);
//     }
//   }
//   return recursion(customDate);
// }
