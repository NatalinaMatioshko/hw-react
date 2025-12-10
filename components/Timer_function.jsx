import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0); //hook

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="block">
      Пройшло {seconds} секунд (Також тут працює react-function timer).
    </div>
  );
}
const domContainer = document.querySelector("#timer");
const root = ReactDOM.createRoot(domContainer);

root.render(<Timer />);

// const UserData = () => {
//   const [user, setUser] = useState(null);

//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState(null);
// };
