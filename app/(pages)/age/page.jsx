"use client";

import React, { useEffect, useState } from "react";

const AgeCountdown = () => {
  const birthDate = new Date(2002, 6, 7); // 7 July 2002 (month is 0-based)

  const calculateAge = () => {
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonthDays = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();
      days += prevMonthDays;
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    return { years, months, days };
  };

  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 60 * 1000); // update every minute (days-level precision)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <p className="text-xs uppercase tracking-widest text-red-500 mb-3">
        time already spent
      </p>

      <div className="grid grid-cols-3 gap-4 w-full max-w-md text-center">
        {[
          ["Years", age.years],
          ["Months", age.months],
          ["Days", age.days],
        ].map(([label, value]) => (
          <div
            key={label}
            className="border border-gray-700 rounded-xl py-6"
          >
            <p className="text-4xl sm:text-5xl font-extrabold">
              {String(value).padStart(2, "0")}
            </p>
            <p className="text-[10px] mt-2 text-gray-400 uppercase tracking-wide">
              {label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-gray-400 text-sm leading-relaxed max-w-xs">
        This time will <span className="text-white font-semibold">never</span>{" "}
        come back.  
        Close this only after starting the task.
      </p>
    </div>
  );
};

export default AgeCountdown;
