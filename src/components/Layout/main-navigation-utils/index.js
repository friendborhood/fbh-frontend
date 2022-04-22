import styled from 'styled-components';
import { GLOBAL_LIGHTGRAY, GLOBAL_SCARLET } from '../../../GlobalStyling';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 147px;

  & section {
    gap: 50px;

    &.site-info {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      cursor: auto;
      }

    &.user-usage {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-right: 40px;
      cursor: auto;
    }

    & div {
      margin-top: 45px;
      color: ${GLOBAL_LIGHTGRAY};
      font-weight: 400, normal;
      font-style: feebo;
      cursor: pointer;
      &:active, &:hover, &:focus {
        color: ${GLOBAL_SCARLET};
        font-weight: bold;
        font-weight: 500, medium;
      }
    }

  }
  & img {
    width: 223px;
    height: 102px;
  }

  & a {
    &:link {
      text-decoration: none; 
    }
    &:active, &:hover, &:focus {
        color: ${GLOBAL_SCARLET};
        font-weight: bold;
        font-weight: 500, medium;
    }
  }
`;
