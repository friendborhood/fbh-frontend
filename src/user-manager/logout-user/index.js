import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../../pages/consts';
import { getTokenFromLocalStorage } from '..';

export const useEffectOrLogout = (callback = () => {}, dependencies = []) => {
  const navigate = useNavigate();
  useEffect(() => (!getTokenFromLocalStorage()
    ? navigate(PAGES.HOME, { replace: true })
    : callback()), dependencies);
};
