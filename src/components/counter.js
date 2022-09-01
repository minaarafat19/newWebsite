import React, { useState, useRef, useEffect } from "react";

const CountUp = ({ start = 0, end }) => {
  const [state, setstate] = useState(null);
  const ref = useRef(0);

  const accumulator = end / 100;
  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setstate(end);
      setstate(result);
      ref.current = result;
    }

    setTimeout(updateCounterState, 50);
  };
  useEffect(() => {
    let IsMounted = true;
    if (IsMounted) {
      updateCounterState();
    }

    return () => (IsMounted = false);
  }, [end]);

  return <div>{state}</div>;
};

export default CountUp;
