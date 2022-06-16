import React from 'react';

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
  return (
    <div>
      <input />
    </div>
  )
}

export { TextField }