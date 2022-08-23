import { styled } from '@mui/material/styles';
import { IconButton } from '../../ui-kit/components/IconButton/IconButton';

export const Container = styled('div')`
  padding: 0 16px;
`;

export const EditorContainer = styled('div')`
  padding: 5px 0;
  width: calc(100%);
  & div.DraftEditor-root {
    overflow: none;
    width: 100%;
    word-break: break-all;
  }

  & div.public-DraftEditor-content {
    min-height: 85px;
  }
`;

export const IconButtonStld = styled(IconButton)(({ theme }) => ({
  paddingTop: 0,
  paddingBottom: 0,
  borderRadius: '10px',
  backgroundColor: theme.palette.background.iconButton,

  '&:hover': {
    backgroundColor: theme.palette.background.IconButtonHover,
  },
}));

export const PrevMessage = styled('div')(({ theme }) => ({
  paddingLeft: '7px',
  borderLeft: `1px solid ${theme.palette.divider}`,
  marginLeft: '5px',
}));
