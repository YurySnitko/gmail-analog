import React, { FC, useEffect, useState } from 'react';
import { IconButton } from '../../ui-kit/IconButton/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { S } from './MailListHeaderIcons.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MailListHeaderIconsProps } from './MailListHeaderIcons.interfaces';
import { mails } from '../../../../consts/mails';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { MenuItem, Tooltip } from '@mui/material';
import { Menu } from '../../ui-kit/Menu/Menu.styles';

const MailListHeaderIcons: FC<MailListHeaderIconsProps> = ({
  selectedMailsIds,
  setSelectedMailsIds,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

  useEffect(() => {
    setCheckboxChecked(selectedMailsIds.length > 0);
  }, [selectedMailsIds]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
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
                <IconButton>
                  <MoreVertIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
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
              <IconButton>
                <MoreVertIcon fontSize={'small'} />
              </IconButton>
            </Tooltip>
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
          onClick={handleClick}
          disableRipple
          size={'small'}
        >
          <ArrowDropDownIcon fontSize={'small'} />
        </S.CheckboxArrowButton>
      </S.CheckBoxWrapper>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Все</MenuItem>
        <MenuItem onClick={handleClose}>Ни одного</MenuItem>
        <MenuItem onClick={handleClose}>Прочитанные</MenuItem>
        <MenuItem onClick={handleClose}>Непрочитанные</MenuItem>
        <MenuItem onClick={handleClose}>Помеченные</MenuItem>
        <MenuItem onClick={handleClose}>Без пометок</MenuItem>
      </Menu>
      {moreIcons()}
    </S.MailListHeaderIconsWrapper>
  );
};

export default MailListHeaderIcons;
