import React from 'react';
import styled from 'styled-components';
import { CategoryTag } from './CategoryTag';
import cleaning from '../../images/tags/cleaning.svg';

const CategoryMenuStyle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 32px 20px;
`;

export default function CategoryMenu() {
  return (
    <CategoryMenuStyle>
      <CategoryTag name="cleaning" icon={cleaning} />
    </CategoryMenuStyle>
  );
}
