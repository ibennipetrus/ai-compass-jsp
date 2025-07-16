import React, { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");

  const getNextMonday = () => {
    const now = new Date();
    const day = now.getDay();
    const diff = (8 - day) % 7;
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + diff);
    nextMonday.setHours(9, 0, 0, 0);
    return nextMonday;
  };

  useEffect(() => {
    const target = getNextMonday();

    const updateCountdown = () => {
      const now = Date.now();
      const distance = target - now;

      if (distance < 0) {
        setTimeLeft("Nächster Kurs startet gleich!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);

      setTimeLeft(
        `Nächster Start in: ${days} Tagen ${hours} Stunden ${minutes} Minuten`
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // jede Minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-black text-lg sm:text-base font-semibold whitespace-normal">
      {timeLeft}
    </div>
  );
}
