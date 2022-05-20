import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../../pages/consts';
import { getTokenFromLocalStorage } from '..';

const PUBLIC_PAGES = [PAGES.HOME, PAGES.SIGN_UP, PAGES.LOGIN];
export const redirectLoggedOutUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href;
    const isUrlPublicPage = PUBLIC_PAGES.find((page) => url.includes(page));
    console.log(`checking if user logged in , url is ${url}`);
    if (!isUrlPublicPage) {
      const userHasToken = getTokenFromLocalStorage();
      if (!userHasToken) {
        console.log(`user should be logged in at ${url} redirecting user to ${PAGES.HOME}`);
        navigate(PAGES.HOME, { replace: true });
      }
    }
  });
};
