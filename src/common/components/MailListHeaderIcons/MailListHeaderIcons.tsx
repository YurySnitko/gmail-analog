import React, { FC, useContext, useEffect, useState } from 'react';
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
import { LocalizationContext } from '../../ui-kit/LocalizationProvider/LocalizationProvider';

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
  const t = useContext(LocalizationContext);

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
              <Tooltip title={t.mailsArchiveTooltip}>
                <IconButton>
                  <ArchiveOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={t.mailsSpamTooltip}>
                <IconButton>
                  <ReportGmailerrorredOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={t.mailsDeleteTooltip}>
                <IconButton>
                  <DeleteOutlineOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
            </S.MoreIconsWrapper>
            <S.MoreIconsWrapper>
              <Tooltip title={t.mailsDeleteMarkAsRead}>
                <IconButton>
                  <DraftsOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={t.mailsSnoozeTooltip}>
                <IconButton>
                  <AccessTimeOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={t.mailsAddToTasksTooltip}>
                <IconButton>
                  <AddTaskOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
            </S.MoreIconsWrapper>
            <S.MoreIconsWrapper>
              <Tooltip title={t.mailsMoveToTooltip}>
                <IconButton>
                  <DriveFileMoveOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={t.mailsLabelsTooltip}>
                <IconButton>
                  <LabelOutlinedIcon fontSize={'small'} />
                </IconButton>
              </Tooltip>
              <Tooltip title={t.mailsMoreTooltip}>
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
                  {t.mailsMoreItemMarkAsRead}
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  {t.mailsMoreItemMarkUnRead}
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  {t.mailsMoreItemMarkAsNotImportant}
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  {t.mailsMoreItemAddStar}
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  {t.mailsMoreItemFilter}
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  {t.mailsMoreItemMute}
                </MenuItem>
                <MenuItem onClick={moreMenuHandleClose}>
                  {t.mailsMoreItemForward}
                </MenuItem>
              </Menu>
            </S.MoreIconsWrapper>
          </S.IconsWrapper>
        ) : (
          <>
            <Tooltip title={t.mailsRefreshTooltip}>
              <IconButton>
                <RefreshIcon fontSize={'small'} />
              </IconButton>
            </Tooltip>
            <Tooltip title={t.mailsMoreTooltip}>
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
                {t.mailsMoreItemAllRead}
              </MenuItem>
              <S.MoreIconMenuItemWrapper>
                <S.MoreIconMenuItem>
                  {t.mailsMoreItemMessage}
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
        <MenuItem onClick={checkboxMenuHandleClose}>
          {t.mailsCheckboxMenuAll}
        </MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>
          {t.mailsCheckboxMenuNoOne}
        </MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>
          {t.mailsCheckboxMenuRead}
        </MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>
          {t.mailsCheckboxMenuUnread}
        </MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>
          {t.mailsCheckboxMenuStarred}
        </MenuItem>
        <MenuItem onClick={checkboxMenuHandleClose}>
          {t.mailsCheckboxMenuUnstarred}
        </MenuItem>
      </Menu>
      {moreIcons()}
    </S.MailListHeaderIconsWrapper>
  );
};

export default MailListHeaderIcons;
