import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import Helper from '../../../hocs/TestHelper/Helper';
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
