import { render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { withStore } from '../../utils/mock-component';
import { extractActionsTypes, makeFakeCard, makeFakeStore, makeFakeUserInfo } from '../../utils/mocks';
import BookmarkButton from './bookmark-button';
import { APIRoute, AuthorizationStatus } from '../../const';
import { changeFavoriteStatus } from '../../store/api-actions';

describe('Component: Bookmark Button', () => {
  const mockCard = makeFakeCard();

  it('should render correct', () => {
    const expectedTestID = 'bookmark';

    const { withStoreComponent } = withStore(<BookmarkButton cardId={mockCard.id} isFavorite={mockCard.isFavorite} />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });

  it('should dispatch "changeFavoriteStatus" when user clicked button', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<BookmarkButton cardId={mockCard.id} isFavorite={mockCard.isFavorite} />, makeFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
        userInfo: makeFakeUserInfo(),
        isAuthError: false
      }
    }));
    mockAxiosAdapter.onPost(`${APIRoute.FavoriteCards}/${mockCard.id}/0`).reply(200, mockCard);

    render(withStoreComponent, {wrapper: BrowserRouter});
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      changeFavoriteStatus.pending.type,
      changeFavoriteStatus.fulfilled.type,
    ]);

  });
});
