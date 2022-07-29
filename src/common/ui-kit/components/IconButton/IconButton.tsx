import { FC, forwardRef } from 'react';
import { IconButtonProps } from './IconButton.interfaces';
import * as S from './IconButton.styles';

export const IconButton: FC<IconButtonProps> = forwardRef(
  ({ children, shape = 'circle', ...props }, ref) => {
    return (
      <S.IconButton shape={shape} {...props} ref={ref}>
        {children}
      </S.IconButton>
    );
  }
);

IconButton.displayName = 'IconButton';
