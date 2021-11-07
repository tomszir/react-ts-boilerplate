import React from 'react';

import * as S from './Button.styled';

function Button({ label, ...props }: ButtonProps) {
  return <S.Button>{label}</S.Button>;
}

export interface ButtonProps {
  label: string;
}

export default Button;
