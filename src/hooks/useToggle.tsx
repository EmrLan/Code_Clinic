import { useState } from 'react';

export default function useToggle(initialValue?: Boolean) {
  const [value, setValue] = useState(false);

  const toggle = () => setValue(prev => !prev);

  const setTrue = () => setValue(true);

  const setFalse = () => setValue(false);

  return [value, toggle, setTrue, setFalse] as const;
}
