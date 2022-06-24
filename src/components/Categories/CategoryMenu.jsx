import { React, useState } from 'react';
import styled from 'styled-components';
import { CategoryTag } from './CategoryTag';
import { CATEGORY_ICON } from '../../GlobalStyling';
import { Dropdown } from '../Dropdown/Dropdown';

const CategoryMenuStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 20px;
  gap: 16px;

  & div {
    &.category-ruler {
      display: flex;
      gap: 16px;
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

  return (
    <CategoryMenuStyle>
      <div className="category-ruler">
        <CategoryTag name="Household & Cleaning" icon={CATEGORY_ICON.CLEANING} isChosen={cleaning} onClickFunc={setCleaning} />
        <CategoryTag name="Electronics" icon={CATEGORY_ICON.ELECTRONICS} isChosen={electronics} onClickFunc={setElectronics} />
        <CategoryTag name="Event & Party" icon={CATEGORY_ICON.PARTY} isChosen={party} onClickFunc={setparty} />
        <CategoryTag name="Clothing" icon={CATEGORY_ICON.CLOTHING} isChosen={clothing} onClickFunc={setclothing} />
        <CategoryTag name="Tools" icon={CATEGORY_ICON.TOOLS} isChosen={tools} onClickFunc={settools} />
        <CategoryTag name="Cooking" icon={CATEGORY_ICON.COOKING} isChosen={cooking} onClickFunc={setcooking} />
      </div>
      <div className="sort">
        <Dropdown chosen={chosen} setChosen={setChosen} />
      </div>
    </CategoryMenuStyle>
  );
}
