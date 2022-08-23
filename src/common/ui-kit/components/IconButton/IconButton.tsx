import { FC, forwardRef } from 'react';
import { IconButtonProps } from './IconButton.interfaces';
import * as S from './IconButton.styles';

export const IconButton: FC<IconButtonProps> = forwardRef(
  ({ children, hoverbackground = 'dark', shape = 'circle', ...props }, ref) => {
    return (
      <S.IconButton
        hoverbackground={hoverbackground}
        shape={shape}
        {...props}
        ref={ref}
      >
        {children}
      </S.IconButton>
    );
  }
);

IconButton.displayName = 'IconButton';
