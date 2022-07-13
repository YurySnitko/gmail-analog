import React, { FC, useEffect, useState } from 'react';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { S } from './MailListHeaderIcons.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MailListHeaderIconsProps } from './MailListHeaderIcons.interfaces';
import { mails } from '../../../mocked/mails';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { Tooltip } from '@mui/material';

const MailListHeaderIcons: FC<MailListHeaderIconsProps> = ({
  selectedMailsIds,
  setSelectedMailsIds,
}) => {
  const [checkboxSelectedMenuItem, setCheckboxSelectedMenuItem] =
    React.useState<null | HTMLElement>(null);
  const [moreMenuSelectedItem, setMoreMenuSelectedItem] =
    React.useState<null | HTMLElement>(null);
  const isCheckboxMenuOpen = Boolean(checkboxSelectedMenuItem);
  const isMoreMenuOpen = Boolean(moreMenuSelectedItem);
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

  useEffect(() => {
    setCheckboxChecked(selectedMailsIds.length > 0);
  }, [selectedMailsIds]);

  const checkboxMenuHandleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setCheckboxSelectedMenuItem(event.currentTarget);
  };

  const checkboxMenuHandleClose = (): void => {
    setCheckboxSelectedMenuItem(null);
  };

  const moreMenuHandleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMoreMenuSelectedItem(event.currentTarget);
  };

  const moreMenuHandleClose = (): void => {
    setMoreMenuSelectedItem(null);
  };

  const checkboxCheckedHandler = (): void => {
    setSelectedMailsIds(checkboxChecked ? [] : mails.map((mail) => mail.id));
    setCheckboxChecked((prev) => !prev);
  };

  const moreIcons = (): React.ReactNode => {
    return (
      <>
        {selectedMailsIds.length > 0 ? (
          <S.IconsWrapper>
            <S.MoreIconsWrapper>
              <Tooltip title={'Архивировать'}>
                <IconButton>
                  <ArchiveOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'В спам!'}>
                <IconButton>
                  <ReportGmailerrorredOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Удалить'}>
                <IconButton>
                  <DeleteOutlineOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
            </S.MoreIconsWrapper>
            <S.MoreIconsWrapper>
              <Tooltip title={'Отметить как прочитанное'}>
                <IconButton>
                  <DraftsOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Отложить'}>
                <IconButton>
                  <AccessTimeOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Добавить в задачи'}>
                <IconButton>
                  <AddTaskOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
            </S.MoreIconsWrapper>
            <S.MoreIconsWrapper>
              <Tooltip title={'переместить в'}>
                <IconButton>
                  <DriveFileMoveOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Ярлыки'}>
                <IconButton>
                  <LabelOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={'Еще'}>
                <IconButton onClick={moreMenuHandleClick}>
                  <MoreVertIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <S.Menu
                anchorEl={moreMenuSelectedItem}
                open={isMoreMenuOpen}
                onClose={moreMenuHandleClose}
              >
                <S.MenuItem onClick={moreMenuHandleClose}>
                  Отметить как прочитанное
                </S.MenuItem>
                <S.MenuItem onClick={moreMenuHandleClose}>
                  Отметить как непрочитанное
                </S.MenuItem>
                <S.MenuItem onClick={moreMenuHandleClose}>
                  Пометить как неважное
                </S.MenuItem>
                <S.MenuItem onClick={moreMenuHandleClose}>
                  Добавить пометку
                </S.MenuItem>
                <S.MenuItem onClick={moreMenuHandleClose}>
                  Фильтровать прохожие письма
                </S.MenuItem>
                <S.MenuItem onClick={moreMenuHandleClose}>
                  Игнорировать
                </S.MenuItem>
                <S.MenuItem onClick={moreMenuHandleClose}>
                  Переслать как прикрепленный файл
                </S.MenuItem>
              </S.Menu>
            </S.MoreIconsWrapper>
          </S.IconsWrapper>
        ) : (
          <>
            <Tooltip title={'Обновить'}>
              <IconButton>
                <RefreshIcon fontSize={'small'} />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Еще'}>
              <IconButton onClick={moreMenuHandleClick}>
                <MoreVertIcon fontSize={'small'} />
              </IconButton>
            </Tooltip>
            <S.Menu
              anchorEl={moreMenuSelectedItem}
              open={isMoreMenuOpen}
              onClose={moreMenuHandleClose}
            >
              <S.MenuItem onClick={checkboxMenuHandleClose}>
                Отметить все как прочитанные
              </S.MenuItem>
              <S.MoreIconMenuItemWrapper>
                <S.MoreIconMenuItem>
                  Выберите несколько сообщений, чтобы увидеть дополнительные
                  действия
                </S.MoreIconMenuItem>
              </S.MoreIconMenuItemWrapper>
            </S.Menu>
          </>
        )}
      </>
    );
  };

  return (
    <S.MailListHeaderIconsWrapper>
      <S.CheckBoxWrapper>
        <S.Checkbox
          size={'small'}
          checked={checkboxChecked}
          onChange={checkboxCheckedHandler}
        />
        <S.CheckboxArrowButton
          onClick={checkboxMenuHandleClick}
          disableRipple
          size={'small'}
        >
          <ArrowDropDownIcon fontSize={'small'} />
        </S.CheckboxArrowButton>
      </S.CheckBoxWrapper>
      <S.Menu
        anchorEl={checkboxSelectedMenuItem}
        open={isCheckboxMenuOpen}
        onClose={checkboxMenuHandleClose}
      >
        <S.MenuItem onClick={checkboxMenuHandleClose}>Все</S.MenuItem>
        <S.MenuItem onClick={checkboxMenuHandleClose}>Ни одного</S.MenuItem>
        <S.MenuItem onClick={checkboxMenuHandleClose}>Прочитанные</S.MenuItem>
        <S.MenuItem onClick={checkboxMenuHandleClose}>Непрочитанные</S.MenuItem>
        <S.MenuItem onClick={checkboxMenuHandleClose}>Помеченные</S.MenuItem>
        <S.MenuItem onClick={checkboxMenuHandleClose}>Без пометок</S.MenuItem>
      </S.Menu>
      {moreIcons()}
    </S.MailListHeaderIconsWrapper>
  );
};

export default MailListHeaderIcons;
