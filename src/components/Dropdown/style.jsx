import styled from 'styled-components';
import { GLOBAL_FONT, GLOBAL_SCARLET } from '../../GlobalStyling';
import check from '../../images/check.svg';

export const CustomDropdown = styled.div`
    font-family: ${GLOBAL_FONT};
    font-weight: 400;
    position: relative;
  & button {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      min-width: 163px;
      height: 45px;
      background: ${GLOBAL_SCARLET}; 
      color: white;
      border-radius: 70px;
      font-style: normal;
      font-size: 20px;
      line-height: 29px;

      & img {
        &.open{
          transform : rotate(180deg);
          transition: transform 200ms ease;
        }
        &.close {
          transform : rotate(0deg);
          transition: transform 200ms ease;
        }
      }
  }
  & ul {
    &.dropdown-content {
      position: absolute;
      z-index: 100;
      top: 100%;
      width: 100%;
      perspective: 1000px;
      display: none;
      background-color: white;
      min-width: 160px;
      box-shadow: 0px 0px 10px rgba(20, 23, 28, 0.1);
      border-radius: 8px;
      margin-top: 7px;
      padding: 20px;
    }
    &.dropdown_content--animated {
      display: block;
    }
    &.dropdown_menu-0{
      animation: ${(props) => (props.isOpen ? 'growDown 200ms ease-in-out forwards' : 'growUp 150ms ease-out forwards')};
      transform-origin: top center;
    }
    &.dropdown_menu-1{
    }
    @keyframes growDown {
      0% {
        transform: scaleY(0)
      }
      80% {
        transform: scaleY(0.7)
      }
      100% {
        transform: scaleY(1)
      }
    }
    @keyframes growUp {
      0% {
        transform: scaleY(1)
      }
      80% {
        transform: scaleY(1.1)
      }
      100% {
        transform: scaleY(0)
      }
    }

    & li {
      position: relative;
      line-height: 25px;
      font-size: 15px;
      color: rgba(20, 23, 28, 0.41);
      font-weight: 400;
      font-size: 18px;
      line-height: 29px;  
      transition: color 0.1s ease;
      border-bottom: 1px solid hsla(217.5, 16.666666666666664%, 9.411764705882353%, 0.1);
      
      cursor: pointer;
      &.chosen{
        color: #14171C;
        background-image: url(${check});
        background-position: right 4px;
        background-repeat: no-repeat; 
      }
      &:hover {
        color: rgba(20, 23, 28, 0.8);
        font-weight: 600;
      }
   }
  }
`;
