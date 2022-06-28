import { FC, useState } from 'react';
import AsideMailList from '../AsideMailLIst/AsideMailList';
import { S } from './Aside.styles';
import { AsideProps } from './Aside.interface';
import WriteButton from '../../ui-kit/WriteButton/WriteButton';

const Aside: FC<AsideProps> = ({ isOpen }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const asideMouseEnderHandler = (): void => {
    if (!isOpen) {
      setIsHover(true);
    }
  };

  const asideLeaveEnderHandler = (): void => {
    if (!isOpen) {
      setIsHover(false);
    }
  };

  return (
    <S.Aside
      isOpen={isOpen || isHover}
      onMouseEnter={asideMouseEnderHandler}
      onMouseLeave={asideLeaveEnderHandler}
    >
      <WriteButton isOpen={isOpen || isHover} />
      <AsideMailList isOpen={isOpen || isHover} />
    </S.Aside>
  );
};

export default Aside;
