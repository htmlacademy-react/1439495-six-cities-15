import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { makeFakeStore } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';
import LoginScreen from './login-screen';

describe('Component: Login Screen', () => {
  it('should render correct', () => {
    const expectedTestId = 'Login Page';
    const { withStoreComponent } = withStore(<LoginScreen />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
