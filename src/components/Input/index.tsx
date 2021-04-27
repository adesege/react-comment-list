import { FC, InputHTMLAttributes } from 'react';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input {...props} />
);

export default Input;
