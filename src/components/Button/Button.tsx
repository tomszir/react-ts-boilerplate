import React from 'react';

import * as S from './Button.styled';

function Button({ label, disabled, ...props }: ButtonProps) {
  return <S.Button disabled={disabled}>{label}</S.Button>;
}

export interface ButtonProps {
  label: string;
  disabled?: boolean;
}

export default Button;
