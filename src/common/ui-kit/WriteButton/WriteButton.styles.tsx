import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { WriteButtonWrapperProps } from './WriteButton.interface';

export const S = {
  Button: styled('button')`
    background-color: ${(props): string => props.theme.palette.common.white};
    border-radius: 20px;
    outline: none;
    border: none;
    box-shadow: ${(props): string => props.theme.customShadows.writeButton};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    margin-left: 0.725rem;

    &:hover {
      box-shadow: ${(props): string =>
        props.theme.customShadows.writeButtonHover};
    }
  `,

  WriteButtonWrapper: styled(
    ({ isOpen, ...props }: WriteButtonWrapperProps) => <div {...props} />
  )`
    padding: ${(props): string => (props.isOpen ? '0 10px 0 5px' : '0 5px')};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-height: 2.5rem;
  `,

  WriteButtonText: styled(Typography)((props) => ({
    color: props.theme.palette.error.main,
    fontSize: '0.875rem',
    letterSpacing: '0.25px',
    lineHeight: '2.5rem',
  })),

  EditIcon: styled(EditIcon)`
    color: ${(props): string => props.theme.palette.error.main};
  `,
};
