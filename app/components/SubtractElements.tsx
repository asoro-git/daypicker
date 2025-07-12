import { subtractDays, subtractMonths } from "@/app/subtractDates";
import { checkWeekend } from "../dateDayChecker";

export function DaySubtractElements({
  customDate,
  dayNum,
}: {
  customDate: string;
  dayNum: number;
}) {
  const dateStr = subtractDays(customDate, dayNum);
  const description =
    dayNum === 14
      ? "埋數"
      : dayNum === 7
        ? "Submit draft papers"
        : dayNum === 4
          ? "Have all papers cleared with seniors"
          : `Custom Days`;

  return (
    <section className="bg-white shadow-md rounded-xl p-6 mt-6 space-y-4">
      {description && (
        <>
          <h2 className="text-lg font-semibold text-gray-800">{description}</h2>
          <hr className="border-gray-200" />
        </>
      )}
      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">
          {dayNum} day{Math.abs(dayNum) > 1 ? "s" : ""} before the day:
          <br />
          YYYY-MM-DD
        </p>
        <p className="text-xl font-mono text-blue-600">{dateStr}</p>
        <div className="mt-4">{checkWeekend(dateStr)}</div>
      </div>
    </section>
  );
}

export function MonthSubtractElements({
  customDate,
  monthNum,
}: {
  customDate: string;
  monthNum: number;
}) {
  const dateStr = subtractMonths(customDate, monthNum);

  return (
    <section className="bg-white shadow-md rounded-xl p-6 mt-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">
        Submit draft minutes
      </h2>
      <hr className="border-gray-200" />
      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">
          {monthNum} month after the day:
          <br />
          YYYY-MM-DD
        </p>
        <p className="text-xl font-mono text-blue-600">{dateStr}</p>
        <div className="mt-4">{checkWeekend(dateStr)}</div>
      </div>
    </section>
  );
}
