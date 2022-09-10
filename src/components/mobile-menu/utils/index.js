import styled from 'styled-components';
import { GLOBAL_FONT, MOBILE_STYLE } from '../../../GlobalStyling';

export const StyledMenu = styled.div`
@media only screen and (max-width: ${MOBILE_STYLE.max_width})
{
    display: flex;
    position: absolute;
    font-style: ${GLOBAL_FONT};
    top: 0;
    z-index: 4000000000001;
    width: 50%;
    height: 100%;
    flex-direction: column;
    background-color: white;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-family: 'Heebo';
    font-weight: 400;
    color: ${MOBILE_STYLE.MENU_ITEM_COLOR};
    padding-left: 10px;
    transition: 0.2s ease-out;
    transform: ${(props) => (props.showMobileMenu ? 'translateX(0%)' : 'translateX(-100%)')} ;

    & div {
        &.options-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
        }

        &.x-container {
            display: flex;
            padding-left: ${MOBILE_STYLE.navigation_padding};
            height: ${MOBILE_STYLE.NAVIGATION_MOBILE_HEIGHT};
            align-items: center;
            margin-bottom: 50px;

            & img {
                width: ${MOBILE_STYLE.X_WIDTH};
                height: ${MOBILE_STYLE.X_HEIGHT};
            }
        }
    }

    & img.cameo {
        align-self: center;
        margin-top: 50px;
        height: 60px;
        width: 60px;
    }
}
`;

export const BlackScreen = styled.div`
    @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
        display: flex;
        position: absolute;
        top: 0;
        z-index: 1002;
        width: 100%;
        height: 100%;
        flex-direction: column;
        background-color: rgba(0,0,0, 0.6);
        animation-name: transformToBlack;
        animation-duration: 0.2s;

        @keyframes transformToBlack {
            0%   {background-color: transparent;}
            50%  {background-color: rgba(0,0,0, 0.4);;}
            100% {background-color: rgba(0,0,0, 0.6);}
        }
    }
`;
