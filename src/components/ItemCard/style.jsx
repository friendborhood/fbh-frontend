import styled from 'styled-components';
import { GLOBAL_FONT, MOBILE_STYLE } from '../../GlobalStyling';
import generalImage from '../../images/mini-icon-removebg.png';

export const Card = styled.div`
display: flex;
flex: none;
flex-grow: 0;
flex-direction: column;
box-sizing: border-box;
padding: 0px;
width: 330px;
height: 381px;
background-color: white;
border-radius: 17px;
cursor: pointer;
filter: drop-shadow(0px 0px 10px rgba(20, 23, 28, 0.1));
@media only screen and (max-width: ${MOBILE_STYLE.max_width})
{
    display: flex;
    flex-grow: 0;
    flex-direction: row;
    box-sizing: border-box;
    width: 95%;
    height: 100px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(20, 23, 28, 0.1);
}

& img {
    &.item {

        flex: none;
        width: 330px;
        height: 280px;
        background: url(block2_760x570.png);
        border-radius: 17px 17px 0px 0px;
        order: 0;
        flex-grow: 0;
        @media only screen and (max-width: ${MOBILE_STYLE.max_width})
        {
            width: 100px;
            height: 100px;
            border-radius: 8px 0px 0px 8px;
        }
    }
    &.user-icon {
        width: 30px;
        height: 30px;
        border-radius: 40px;
        background-image: url(${generalImage});
    }
}
& div {
    display: flex;
    &.text {           
        font-family: ${GLOBAL_FONT};
        font-style: normal;
        line-height: 29px;
        @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
            font-size: 14px;
            line-height: 21px;
        }
    }
    &.user-info {
        gap: 8px;
    }
    &.small {
        font-weight: 500;
        font-size: 16px;
        line-height: 23.5px;
        color: #14171C;
        @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
            font-size: 14px;
            line-height: 21px;
        }
    }
    &.large {
        font-weight: 600;
        font-size: 20px;
        @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
            font-size: 14px;
            line-height: 21px;
        }
    }
    &.gray {
        font-weight: 500;
        font-size: 20px;
        color: #99A0A9;
    }
    &.item-details {
        flex-direction: column;
        gap: 8px;
        padding: 16px;
    }
    &.info-line {
        flex-direction: row;
        justify-content: space-between;
    }
}
`;
