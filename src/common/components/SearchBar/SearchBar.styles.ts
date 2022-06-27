import { styled } from '@mui/material/styles';
import { IconButton } from '../../ui-kit/IconButton/IconButton';

export const Container = styled('div')`
  position: relative;
  max-width: 720px;
  width: 100%;
`;

export const FormContainer = styled('div')(({ theme }) => ({
  borderRadius: '8px',
  border: '1px solid transparent',
  backgroundColor: theme.palette.background.searchBar,
  transition: 'background 100ms ease-in, width 100ms ease-out',

  '&:focus-within': {
    backgroundColor: theme.palette.background.searchBarFocused,
    boxShadow: theme.customShadows.searchBarFocused,
  },
}));

export const SearchButton = styled(IconButton)`
  margin: 3px 8px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SearchParamsButton = styled(IconButton)`
  margin: 3px 8px;
  position: absolute;
  top: 0;
  right: 0;
`;
