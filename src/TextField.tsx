import React, { useRef, useState } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text?: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => number;
  person: Person,
  handleChange: (event: React.ChangeEvent<HTMLInputElement> | undefined) => void;
}

interface TextNode {
  text: string
}

const TextField: React.FC<Props> = ({ person, fn, i, ok, text, handleChange}) => {
  // useState argument can have type number or null
  const [count, setCount] = useState<TextNode>({text: "hello world"});
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}

export { TextField }