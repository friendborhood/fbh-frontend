/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../network';
import { MOBILE_STYLE } from '../../GlobalStyling';
import { CategoryTag } from '../Categories/CategoryTag';
import card1 from '../../images/card1.svg';
import card2 from '../../images/card2.svg';
import card3 from '../../images/card3.svg';
import card4 from '../../images/card4.svg';
import card5 from '../../images/card5.svg';
import { PAGES } from '../../pages/consts';

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
    & h1 {
                width: 100vw;
                font-family: 'Anomalia ML v2 AAA';
                text-transform: uppercase;
                font-style: normal;
                font-weight: 700;
                font-size: 64px;
                line-height: 79px;
    }

    & div {
        .category-ruler {
            display: flex;
            flex-direction: row;
            height: 37px;
            justify-content: center;
            @media only screen and (max-width: ${MOBILE_STYLE.max_width})
            {
                overflow-x: scroll;
                width: 100vw;
            }
        }  

        &.card-container {
            display: flex;
            flex-direction: row;
            width: 100vw;
            justify-content: center;
        }
    }

    & button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        width: 154px;
        height: 45px;
        left: 883px;
        top: 2198px;
        border: 1.5px solid #14171C;
        border-radius: 8px;
        font-family: 'Heebo';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 29px;
        color: #14171C;
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
  };

  return (
    <StyledShared>
      <h1>Frequently shared product</h1>
      <div className="category-ruler">
        {tags}
      </div>
      <div className="card-container">
        <LazyLoadImage
          alt="item card"
          effect="opacity"
          src={card1}
          threshold="10"
          style={
            {
              objectFit: 'cover',
              width: '330px',
              height: '381px',
            }
        }
        />
        <LazyLoadImage
          alt="item card"
          effect="opacity"
          src={card2}
          threshold="10"
          style={
            {
              objectFit: 'cover',
              width: '330px',
              height: '381px',
            }
        }
        />
        <LazyLoadImage
          alt="item card"
          effect="opacity"
          src={card3}
          threshold="10"
          style={
            {
              objectFit: 'cover',
              width: '330px',
              height: '381px',
            }
        }
        />
        <LazyLoadImage
          alt="item card"
          effect="opacity"
          src={card4}
          threshold="10"
          style={
            {
              objectFit: 'cover',
              width: '330px',
              height: '381px',
            }
        }
        />
        <LazyLoadImage
          alt="item card"
          effect="opacity"
          src={card5}
          threshold="10"
          style={
            {
              objectFit: 'cover',
              width: '330px',
              height: '381px',
            }
      }
        />
      </div>
      <button type="button" onClick={goToDashboard}>Show More</button>
    </StyledShared>
  );
};
