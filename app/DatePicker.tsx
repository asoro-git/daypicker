"use client";
import { useState, useEffect } from "react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DaySubtractElements,
  MonthSubtractElements,
} from "@/app/components/SubtractElements";

export function DatePicker() {
  const [customDate, setCustomDate] = useState(
    new Date(Date.now()).toISOString().split("T")[0],
  );
  const [customDayNum, setCustomDayNum] = useState(0);

  useEffect(() => {
    if (!customDate) return;
  }, [customDate]);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className="text-2xl font-semibold mb-4">Pick a Date</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="date" onChange={(e) => setCustomDate(e.target.value)} />
        </CardContent>
      </Card>
      <CardHeader className="mt-8">
        <CardTitle>
          <h1>Custom N Days before</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="number"
          onChange={(e) => setCustomDayNum(Number(e.target.value))}
        />
      </CardContent>

      <h1 className="mt-4 font-bold">You have picked: {customDate}</h1>
      {/* custom days  */}
      <DaySubtractElements customDate={customDate} dayNum={customDayNum} />
      <DaySubtractElements customDate={customDate} dayNum={14} />
      <DaySubtractElements customDate={customDate} dayNum={7} />
      <DaySubtractElements customDate={customDate} dayNum={4} />
      <MonthSubtractElements customDate={customDate} monthNum={1} />
    </>
  );
}
