import { useEffect, useState } from "react";
type CountdownProps = {
  initialDays: number;
  initialHours: number;
  initialMinutes: number;
};
const CountdownTimer = ({
  initialDays,
  initialHours,
  initialMinutes,
}: CountdownProps) => {
  const [time, setTime] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return prev;
        }
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="w-full flex items-center justify-center gap-1">
      {[
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Minutes", value: time.minutes },
        { label: "Seconds", value: time.seconds },
      ].map((item, i, arr) => {
        const isFirst = i === 0;
        const isLast = i === arr.length - 1;

        return (
          <div
            key={item.label}
            className={`flex flex-col items-center bg-[#FFF2F3] py-1 px-2 w-full
            ${isFirst ? "rounded-l-xl" : ""}
            ${isLast ? "rounded-r-xl" : ""}
            `}
          >
            <p className="text-[#F55157] text-[18px] font-semibold">
              {pad(item.value)}
            </p>
            <span className="text-sm font-normal text-[#F9979A]">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default CountdownTimer;
