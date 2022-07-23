/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { click } from '@testing-library/user-event/dist/click';
import CategoryMenu from '../../components/Categories/CategoryMenu';
import DashboardWrapper from '../../components/DashboardWrapper/DashboardWrapper';
import ItemCard from '../../components/ItemCard/ItemCard';
import BoxInput from '../../components/BoxInput';
import { END_POINTS, network } from '../../network';
import { SECONDARY_BACKGROUND, MOBILE_STYLE } from '../../GlobalStyling';

function UploadOffer() {
  return (
    <div>
      <h1>
        Upload Offer
      </h1>
    </div>
  );
}

export default UploadOffer;
