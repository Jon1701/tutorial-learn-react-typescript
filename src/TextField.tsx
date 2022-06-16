import React, { useState } from 'react';

interface Person {
  firstName: string;
  lastName: string;

}

interface Props {
  text?: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => number;
  person: Person
}

const TextField: React.FC<Props> = ({ person, fn, i, ok, text}) => {
  // useState argument can have type number or null
  const [count, setCount] = useState<number | null>(5);

  return (
    <div>
      <input />
    </div>
  )
}

export { TextField }