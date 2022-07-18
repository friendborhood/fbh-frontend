import { React, useState } from 'react';
import styled from 'styled-components';
import { CategoryTag } from './CategoryTag';
import { CATEGORY_ICON, MOBILE_STYLE } from '../../GlobalStyling';
import { Dropdown } from '../Dropdown/Dropdown';
import sortIcon from '../../images/tags/sort.svg';

const CategoryMenuStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 32px 20px;
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

export default function CategoryMenu() {
  const [cleaning, setCleaning] = useState(false);
  const [electronics, setElectronics] = useState(false);
  const [party, setparty] = useState(false);
  const [clothing, setclothing] = useState(false);
  const [tools, settools] = useState(false);
  const [cooking, setcooking] = useState(false);

  const [chosen, setChosen] = useState('Nearest First');
  const sortingOptions = ['Nearest First', 'Newest First'];

  return (
    <CategoryMenuStyle>
      <div className="sort">
        <Dropdown
          chosen={chosen}
          setChosen={setChosen}
          options={sortingOptions}
          mobileDisplay={<img src={sortIcon} alt="sort icon" />}
        />
      </div>
      <div className="category-ruler">
        <CategoryTag name="Household & Cleaning" icon={CATEGORY_ICON.CLEANING} isChosen={cleaning} onClickFunc={setCleaning} />
        <CategoryTag name="Electronics" icon={CATEGORY_ICON.ELECTRONICS} isChosen={electronics} onClickFunc={setElectronics} />
        <CategoryTag name="Event & Party" icon={CATEGORY_ICON.PARTY} isChosen={party} onClickFunc={setparty} />
        <CategoryTag name="Clothing" icon={CATEGORY_ICON.CLOTHING} isChosen={clothing} onClickFunc={setclothing} />
        <CategoryTag name="Tools" icon={CATEGORY_ICON.TOOLS} isChosen={tools} onClickFunc={settools} />
        <CategoryTag name="Cooking" icon={CATEGORY_ICON.COOKING} isChosen={cooking} onClickFunc={setcooking} />
      </div>
    </CategoryMenuStyle>
  );
}
