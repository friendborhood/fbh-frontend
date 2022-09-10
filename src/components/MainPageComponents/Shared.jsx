/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../network';
import { MOBILE_STYLE } from '../../GlobalStyling';
import { CategoryTag } from '../Categories/CategoryTag';
import vaccum from '../../images/mock/vaccum.jpeg';
import souvlaki from '../../images/mock/souvlaki.jpg';
import { PAGES } from '../../pages/consts';
import ItemCard from '../ItemCard/ItemCard';
import Profile1 from '../../images/mock/profile1.png';
import Profile2 from '../../images/mock/Profile2.png';

const StyledShared = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 4%;
    padding-bottom: 8%;
    width: 100vw;
    gap: 43px;
    @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
      gap: 23px;
    }
    & h1 {
      width: 100vw;
      font-family: 'Anomalia ML v2 AAA';
      text-transform: uppercase;
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 79px;
      @media only screen and (max-width: ${MOBILE_STYLE.max_width})
      {
        font-size: 20px;
        line-height: 100%;
        margin-top: 4%;
      }
    }

    & div {
      &.category-ruler {
          display: flex;
          flex-direction: row;
          height: 37px;
          justify-content: center;
          gap: 5px;
          @media only screen and (max-width: ${MOBILE_STYLE.max_width})
          {
            justify-content: flex-start;
            overflow-x: scroll;
            width: 100vw;
          }
      }  

      &.card-container {
        display: flex;
        flex-direction: row;
        width: 100vw;
        gap: 30px;
        justify-content: center;
        @media only screen and (max-width: ${MOBILE_STYLE.max_width})
        {
          display: flex;
          width: 100vw;
          flex-direction: column;
        }
      }
    }

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      width: 154px;
      height: 45px;
      left: 883px;
      top: 2777px;
      background: #FFFFFF;
      border: 1px solid #14171C;
      color: #14171C;
      border-radius: 8px;
      margin-top: 3%;
      font-weight: 700;
      @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
        font-size: 14px; 
        width: 141px;
        height: 37px;
      }
    }
`;

export const Shared = () => {
  const [tags, setTags] = useState(false);
  const navigate = useNavigate();
  useEffect(async () => {
    const categories = await fetchCategories();
    const categoriesCards = Object.entries(categories).map(([categoryName, iconUrl], index) => {
      const isClicked = false;
      return <CategoryTag name={categoryName} icon={iconUrl} isChosen={isClicked} key={index} />;
    });
    setTags(categoriesCards);
  }, []);

  const goToDashboard = () => {
    navigate(PAGES.DASHBOARD, { replace: true });
  };//  const { firstName, lastName, imageUrl: offererUserIconUrl } = offererUserData;
  const mockOfferer1 = {
    firstName: 'Omer',
    lastName: 'Arzi',
    imageUrl: Profile1,
    phoneNumber: '0542002434',
    email: 'arzi@friendborhood.io',
  };
  const mockOfferer2 = {
    firstName: 'Daniel',
    lastName: 'Dolev',
    imageUrl: Profile2,
    phoneNumber: '0503777105',
    email: 'dolev@friendborhood.io',
  };
  return (
    <StyledShared>
      <h1>Frequently shared product</h1>
      <div className="category-ruler">
        {tags}
      </div>
      <div className="card-container">
        <ItemCard
          offerData={
            {
              imageUrl: vaccum,
              itemData: { itemName: 'Vaccum cleaner' },
              offererUserData: mockOfferer1,
              distanceFromUser: 700,
              name: 'Omer',
              priceAsked: '2',
              description: 'good as new',
            }
          }

        />
        <ItemCard
          offerData={
            {
              imageUrl: souvlaki,
              itemData: { itemName: 'Vinyl Record' },
              offererUserData: mockOfferer2,
              distanceFromUser: 3100,
              name: 'Daniel',
              priceAsked: '0',
              description: 'good as new',
            }
          }
        />
      </div>
      <button type="button" onClick={goToDashboard}>Show More</button>
    </StyledShared>
  );
};
