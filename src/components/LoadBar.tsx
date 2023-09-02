import {useEffect, useState} from "react";

type LoadBarProps = {
  started: Date,
  duration: number,
}
export default function LoadBar(props: LoadBarProps) {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const millisecondsForFrame = 1000 / 60;
    const interval = setInterval(() => setTime(Date.now()), millisecondsForFrame);

    return () => {
      clearInterval(interval);
    };
  }, []);


  const {started, duration} = props;
  const shouldEnd = new Date(started.getTime() + duration);
  // calc % of
  const progress = (time - started.getTime()) / (shouldEnd.getTime() - started.getTime());

  return (
    <div className="h-2 bg-gray-200 rounded">
      <div
        className="h-2 bg-blue-600 rounded"
        style={{
          width: `${progress * 100}%`
        }}
      />
    </div>
  );
}
