import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { extractActionsTypes, makeFakeStore, makeFakeUserInfo } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';
import Layout from './layout';
import { APIRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';

describe('Component: Layout', () => {
  it('should render correct', () => {
    const expectedTestId = 'layout-test';
    const { withStoreComponent } = withStore(<Layout />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });

  it('should dispatch "logoutAction" when user clicked "sign out"', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<Layout />, makeFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        userInfo: makeFakeUserInfo(),
        isAuthError: false
      }
    }));
    mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

    render(withStoreComponent, {wrapper: BrowserRouter});
    await userEvent.click(screen.getByText('Sign out'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type,
    ]);
  });
});
