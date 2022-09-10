/* eslint-disable operator-linebreak */
import { React, useState, useEffect } from 'react';
import styled from 'styled-components';

import { CategoryTag } from './CategoryTag';
import { MOBILE_STYLE } from '../../GlobalStyling';
import { Dropdown } from '../Dropdown/Dropdown';
import sortIcon from '../../images/tags/sort.svg';
import { fetchCategories } from '../../network';

const CategoryMenuStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 32px 20px;
  padding-top: 5px;
  gap: 16px;

  @media only screen and (max-width: ${MOBILE_STYLE.max_width})
  {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px;
    gap: 16px;
    width: 100vw;
  }
  & div {
    &.category-ruler {
      display: flex;
      gap: 16px;
      height: 37px;
      @media only screen and (max-width: ${MOBILE_STYLE.max_width})
      {
        overflow-x: scroll;
        width: 100vw;
      }
    }
    &.sort {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default function CategoryMenu({
  categoriesChanged,
  setCategoriesChanged,
  selectedSortMethod,
  setSelectedSortMethod,
}) {
  const [tags, setTags] = useState(false);

  useEffect(async () => {
    const categories = await fetchCategories();
    const categoriesCards = Object.entries(categories).map(([categoryName, iconUrl], index) => {
      const isClicked = true;
      return (
        <CategoryTag
          name={categoryName}
          icon={iconUrl}
          value={categoriesChanged}
          setValue={setCategoriesChanged}
          isChosen={isClicked}
          key={index}
        />
      );
    });
    setTags(categoriesCards);
  }, []);
  const sortingOptions = ['Nearest First', 'Newest First'];

  useEffect(() => {
    console.log(`change sort method to ${selectedSortMethod}`);
    localStorage.setItem('sortMethod', selectedSortMethod);
    setSelectedSortMethod(selectedSortMethod);
  }, []);

  return (
    <CategoryMenuStyle>
      <div className="sort">

        <Dropdown
          chosen={selectedSortMethod}
          setChosen={setSelectedSortMethod}
          options={sortingOptions}
          mobileDisplay={<img src={sortIcon} alt="sort icon" />}
        />

      </div>
      <div className="category-ruler">
        {tags}
      </div>
    </CategoryMenuStyle>
  );
}
