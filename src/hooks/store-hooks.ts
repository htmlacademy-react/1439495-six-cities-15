import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { StateType } from '../store/reducer';

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
