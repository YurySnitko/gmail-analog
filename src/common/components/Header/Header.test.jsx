import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import Helper from '../../../hocs/TestHelper/Helper';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

jest.spyOn(require('next/router'), 'useRouter');

describe('Header', () => {
  useRouter.mockImplementation(() => ({
    useRouter() {
      return {
        route: '/',
        pathname: '',
        query: '',
        asPath: '',
      };
    },
  }));

  it('Test', () => {
    render(
      <Helper>
        <Header
          onHideButtonClick={() => {}}
          setIsSettingsOpenHandler={() => {}}
        />
        )
      </Helper>
    );
    expect(screen.getByText(/Темный/i)).toBeInTheDocument();
  });
});
