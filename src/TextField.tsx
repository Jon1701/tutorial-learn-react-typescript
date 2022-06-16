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

interface TextNode {
  text: string
}

const TextField: React.FC<Props> = ({ person, fn, i, ok, text}) => {
  // useState argument can have type number or null
  const [count, setCount] = useState<TextNode>({text: "hello world"});

  setCount({text: "Goodbye World"})

  return (
    <div>
      <input />
    </div>
  )
}

export { TextField }