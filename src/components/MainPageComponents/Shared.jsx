/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchCategories } from '../../network';
import { MOBILE_STYLE } from '../../GlobalStyling';
import { CategoryTag } from '../Categories/CategoryTag';

const StyledShared = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 4%;
    padding-bottom: 8%;
    width: 100vw;
    text-align: center;
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

    & div.category-ruler {
      display: flex;
      gap: 16px;
      height: 37px;
      justify-content: center;
      @media only screen and (max-width: ${MOBILE_STYLE.max_width})
      {
        overflow-x: scroll;
        width: 100vw;
      }
    }  
`;

export const Shared = () => {
  const [tags, setTags] = useState(false);

  useEffect(async () => {
    const categories = await fetchCategories();
    const categoriesCards = Object.entries(categories).map(([categoryName, iconUrl], index) => {
      const isClicked = false;
      return <CategoryTag name={categoryName} icon={iconUrl} isChosen={isClicked} key={index} />;
    });
    setTags(categoriesCards);
  }, []);

  return (
    <StyledShared>
      <h1>Frequently shared product</h1>
      <div className="category-ruler">
        {tags}
      </div>
    </StyledShared>
  );
};
