import styled from 'styled-components';
import { GLOBAL_FONT, GLOBAL_SCARLET, SECONDARY_BACKGROUND } from '../../GlobalStyling';

export const UploadOfferStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 6%;
    /* justify-items: center; */
    align-items: center;
    /* align-content: center; */
    position: relative;
    background-color: ${SECONDARY_BACKGROUND};
    width: 100vw;
    height: 100%;

    & div.single-step {
        display: none;
        position: absolute;
    }

    & div.displayOnStart {
        display: flex;
        flex-direction: column;
        animation-name: fadeInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-in;
        animation-delay: 0s;
        animation-direction: alternate;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    & div.displayOn {
        display: flex;
        opacity: 0;
        flex-direction: column;
        animation-name: fadeInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-in;
        animation-delay: 1s;
        animation-direction: alternate;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    & div.displayOff {
        animation-name: fadeOutRight;
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-delay: 0s;
        animation-direction: alternate;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    & div.progress-bar-container {
        margin-bottom: 40px;
    }

    & div { 
        &.main-panel {
            position: relative;
            height: 636px;
            width: 1375px;
            max-width: 80%;
            max-height: 60%;
            background-color: white;
            border-radius: 10px;
            padding: 100px 75px 100px 200px;
            box-shadow: 0px 0px 10px 0px #14171C1A;

            &.field-title {
                color: #14171C;
                text-align: left;
                font-size: 20px;
                line-height: 29px;
                font-family: ${GLOBAL_FONT};
                font-weight: 500;
            }

            & div.description-container {
                margin-top: 20px;

                & textarea.description-input {
                    text-align: left;
                    display: flex;
                    padding-top: 0;
                    flex-direction: flex-start;
                    width: 446px;
                    height: 114px;
                    border-radius: 8px;
                    border: solid 1px #99A0A9;
                }

                & textarea.description-input:focus {
                    outline: none;
                    border: solid 1px ${GLOBAL_SCARLET};
                    box-shadow: none;
                }
            }

            & button.step {
                position: absolute;
                border-radius: 8px;
                width: 137px;
                height: 45px;
                padding: 8px;
                background-color: ${GLOBAL_SCARLET};
                color: white;
                font-size: 20px;
                line-height: 29px;
                font-family: ${GLOBAL_FONT};
                font-weight: 500;
                right: 71px;
                bottom: 70px;
            }

            & button {

            }
        }
    }
    @keyframes fadeInLeft {
        0% {
            display:flex;
            opacity: 0;
            transform: translateX(-40px);
        }
        100% {
            display:flex;
            opacity: 1;
            transform: translateX(0);
        }
    }   

    @keyframes fadeOutRight {
        0% {
            display:flex;
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            display: none;
            opacity: 0;
            transform: translateX(60px);
        }
    }   
`;
