"use client";
import { useState, useEffect } from "react";
import { getHolidays, Holiday } from "@/app/getHolidays";
import { DatePicker } from "@/app/DatePicker";
import "@/app/globals.css";

export default function Home() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const year = 2025;
  useEffect(() => {
    getHolidays(year).then(setHolidays).catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-800 p-4 md:p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar / Input */}
        <aside className="md:w-1/3 w-full bg-white rounded-2xl shadow p-6">
          <DatePicker />
        </aside>

        {/* Holiday List */}
        <section className="md:w-2/3 w-full bg-white rounded-2xl shadow p-6 overflow-auto">
          <h2 className="text-2xl font-semibold mb-4">
            📌 Holidays in <span className="font-mono">{year}</span>
          </h2>

          {holidays.length === 0 ? (
            <p className="text-sm text-gray-500">No holidays found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse text-sm">
                <thead className="sticky top-0 bg-white z-10 border-b">
                  <tr className="text-left text-gray-600 uppercase text-xs">
                    <th className="pb-2 pr-4">Date</th>
                    <th className="pb-2">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {holidays.map((h) => (
                    <tr
                      key={h.date}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-2 pr-6 font-mono text-[13px] text-neutral-700 whitespace-nowrap">
                        {h.date}
                      </td>
                      <td className="py-2 text-neutral-800">{h.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
