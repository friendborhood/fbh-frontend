import styled from 'styled-components';
import { SECONDARY_BACKGROUND } from '../../GlobalStyling';

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

    & div.progress-bar-container {
        margin-bottom: 40px;
    }

    & div { 
        &.main-panel {
            position: sticky;
            height: 636px;
            width: 1375px;
            max-width: 80%;
            max-height: 60%;
            background-color: rgba(20, 23, 28, 0.1);
            border-radius: 10px;
        }
    }
`;
