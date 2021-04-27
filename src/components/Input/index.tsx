import { FC } from 'react';

type InputProps = { placeholder?: string; };

const Input: FC<InputProps> = (props) => (
  <input {...props} />
);

export default Input;
