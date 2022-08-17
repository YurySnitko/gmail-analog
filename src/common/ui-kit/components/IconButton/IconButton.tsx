import { FC, forwardRef } from 'react';
import { IconButtonProps } from './IconButton.interfaces';
import * as S from './IconButton.styles';

export const IconButton: FC<IconButtonProps> = forwardRef(
  ({ children, hoverBackground = 'dark', shape = 'circle', ...props }, ref) => {
    return (
      <S.IconButton
        hoverBackground={hoverBackground}
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
