import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { StateType } from '../store/reducer';
import { store } from '../store';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
