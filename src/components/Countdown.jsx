import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  // Target date: 25 November 2026, 10:00 PM
  const targetDate = new Date("2026-11-25T22:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h2 style={{ fontSize: "50px" }}>
        {timeLeft.days} Days{" "} 
        {timeLeft.hours} Hours{" "}<br/>
        {timeLeft.minutes} Minutes{" "}
        {timeLeft.seconds} Seconds
      </h2>
    </div>
  );
}

export default Countdown;

