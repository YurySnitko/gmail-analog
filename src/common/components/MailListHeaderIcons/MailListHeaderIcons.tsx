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
import { MenuItem, Tooltip } from '@mui/material';
import { Menu } from '../../ui-kit/components/Menu/Menu.styles';

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
    setSelectedMailsIds(checkboxChecked ? [] : mails.map((mail) => mail._id));
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
              <Menu
                anchorEl={moreMenuSelectedItem}
                open={isMoreMenuOpen}
                onClose={moreMenuHandleClose}
              >
                <MenuItem onClick={moreMenuHandleClose}>
                  Отметить как прочитанное
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  Отметить как непрочитанное
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  Пометить как неважное
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  Добавить пометку
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  Фильтровать прохожие письма
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>Игнорировать</MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  Переслать как прикрепленный файл
                </MenuItem>
              </Menu>
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
            <Menu
              anchorEl={moreMenuSelectedItem}
              open={isMoreMenuOpen}
              onClose={moreMenuHandleClose}
            >
              <MenuItem onClick={checkboxMenuHandleClose}>
                Отметить все как прочитанные
              </MenuItem>
              <S.MoreIconMenuItemWrapper>
                <S.MoreIconMenuItem>
                  Выберите несколько сообщений, чтобы увидеть дополнительные
                  действия
                </S.MoreIconMenuItem>
              </S.MoreIconMenuItemWrapper>
            </Menu>
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
      <Menu
        anchorEl={checkboxSelectedMenuItem}
        open={isCheckboxMenuOpen}
        onClose={checkboxMenuHandleClose}
      >
        <MenuItem onClick={checkboxMenuHandleClose}>Все</MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>Ни одного</MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>Прочитанные</MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>Непрочитанные</MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>Помеченные</MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>Без пометок</MenuItem>
      </Menu>
      {moreIcons()}
    </S.MailListHeaderIconsWrapper>
  );
};

export default MailListHeaderIcons;
