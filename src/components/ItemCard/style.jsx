import styled from 'styled-components';
import {
  GLOBAL_FONT, GLOBAL_LIGHTGRAY, GLOBAL_SCARLET, MOBILE_STYLE,
} from '../../GlobalStyling';
import generalImage from '../../images/mini-icon-removebg.png';

export const Card = styled.div`
display: flex;
flex: none;
flex-grow: 0;
z-index: 20;
flex-direction: column;
box-sizing: border-box;
padding: 0px;
width: 330px;
height: 381px;
background-color: ${(props) => (props.disabled ? 'gray' : 'white')};
border-radius: 17px;
cursor: pointer;
filter: drop-shadow(0px 0px 10px rgba(20, 23, 28, 0.1));
transform: scale(1);
transition: transform 200ms ease;

@media only screen and (max-width: ${MOBILE_STYLE.max_width})
{
    display: flex;
    flex-grow: 0;
    flex-direction: row;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(20, 23, 28, 0.1);
}

& div.personal-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    & div.first-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        margin-bottom: 4%;

        & div.name {
            margin-top: 12%;
            font-family: ${GLOBAL_FONT};
            font-weight: 700;
            font-size: 18px;
            line-height: 100%;
            width: fit-content;
            white-space: nowrap;
        }

        & div.phone {
            margin-top: 12%;
            flex-direction: row;
            font-family: ${GLOBAL_FONT};
            font-weight: 400;
            font-size: 18px;
            line-height: 100%;
            width: fit-content;
            white-space: nowrap;
            gap: 3px;
            margin-left: 5%;
            @media only screen and (max-width: ${MOBILE_STYLE.max_width}) 
            {
                font-size: 14px;
                margin-left: 1%;
            }
        }
    }
    & div.email {
        gap: 3px;
    }
}

& div.flipped-side {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 40%;
    padding: 25%;
    font-weight: 700;


    @media only screen and (max-width: ${MOBILE_STYLE.max_width}) 
    {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0 50px;
        gap: 50%;
        padding: unset;
    }

    & button {
        &.delete-offer {
            font-weight: 400;
            color: ${GLOBAL_SCARLET};

            &:hover {
                font-weight: 500;
            }
        }

        &.disable-offer {
            font-weight: 500;
            color: ${GLOBAL_LIGHTGRAY};
            &:hover {
                font-weight: 700;
            }
        }

    @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
        height: fit-content;
        width: fit-content;
    }
    }
}


@media only screen and (min-width: ${MOBILE_STYLE.max_width})
{
    &:hover {
        transform: scale(1.02);
        filter: drop-shadow(0px 0px 7px rgba(20, 23, 28, 0.4));
        transition: transform 200ms ease;
    }
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
            justify-content: center;
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
            width: 80px;
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
        @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
            padding: 16px;
            padding-top: 8px;
        }
    }
    &.info-line {
        flex-direction: row;
        justify-content: space-between;
    }
}
`;
