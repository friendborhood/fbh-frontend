/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Checkbox, Slider, Stack } from '@mui/material';
import { network, END_POINTS } from '../../network';
import ItemCard from '../../components/ItemCard/ItemCard';
import CategoryMenu from '../../components/Categories/CategoryMenu';
import { GLOBAL_FONT, GLOBAL_SCARLET } from '../../GlobalStyling';
// import { GLOBAL_SCARLET } from '../../GlobalStyling';

const StyledOffersTable = styled.div`
  & p.filter-checkbox {
    margin-top: 20px;
    margin-left: 23px;
    font-weight: 600;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14%;
  font-family: ${GLOBAL_FONT};
  font-style: normal;
  font-weight: 500;
  font-size: 19.5px;
  line-height: 41px;
  color: #14171C;
  padding-top: 13px;
  text-align: left;
  padding-right: 10px;
  padding: 30px 40px 10px 0; 
`;

const OfferTableStyle = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  gap: 40px;
  padding: 15px 21px;
  padding-top: 22px;
  height: 100%;
  justify-content: center;
`;

function OffersTable({ myOffers = false }) {
  const sliderPercent = localStorage.getItem('sliderPercent') || 50;
  const [slider, setSlider] = useState(sliderPercent);
  const [radius, setRadius] = useState(sliderPercent / 10);
  const [offers, setOffers] = useState([]);
  const [filterSelf, setFilterSelf] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [sortMethod, setSelectedSortMethod] = useState(localStorage.getItem('sortMethod') || 'Nearest First');

  const fetchSelectedCategories = () => {
    const relevantCategories = [];
    const rawCategoriesFromLocalStorage = localStorage.getItem('selectedCategories');
    if (rawCategoriesFromLocalStorage) {
      const categoriesFromLocalStorage = JSON.parse(rawCategoriesFromLocalStorage);
      Object.keys(categoriesFromLocalStorage).forEach((category) => {
        if (categoriesFromLocalStorage[category]) {
          relevantCategories.push(category);
        }
      });
    }
    return relevantCategories;
  };
  const fetchOffersHandler = async () => {
    const params = {};
    if (!filterSelf) {
      params.filterSelf = false;
    }
    params.radius = radius * 1000;
    if (sortMethod === 'Newest First') {
      params.newest = true;
    }

    params.categories = fetchSelectedCategories();
    const { data } = await network.get(
      myOffers ? `${END_POINTS.OFFERS}/me` : `${END_POINTS.OFFERS}/in-area`,
      { params: myOffers ? {} : params },
    );
    setOffers(data);
  };
  useEffect(() => {
    console.log('offers dashboard use effect run');
    localStorage.setItem('sortMethod', sortMethod);
    fetchOffersHandler();
  }, [radius, sortMethod, selectedCategories, filterSelf]);
  const sliderHandler = (event, newValue) => {
    setSlider(newValue);
    setRadius(newValue / 10);
    localStorage.setItem('sliderPercent', newValue);
  };
  const items = offers.map((offer, index) => (
    <ItemCard
      myOffers={myOffers}
      offerData={offer}
      key={index}
    />
  ));
  return (
    <StyledOffersTable>
      {!myOffers && (
      <p className="filter-checkbox">
        Include My Offers?
        <Checkbox
          checked={filterSelf}
          onChange={() => setFilterSelf(!filterSelf)}
          sx={{
            color: GLOBAL_SCARLET,
            '&.Mui-checked': {
              color: GLOBAL_SCARLET,
            },
          }}
        />
      </p>
      )}

      {!myOffers && (
      <CategoryMenu
        categoriesChanged={selectedCategories}
        setCategoriesChanged={setSelectedCategories}
        selectedSortMethod={sortMethod}
        setSelectedSortMethod={setSelectedSortMethod}
      />
      )}
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" />
      {!myOffers && (
      <div style={{ maxWidth: 500 }}>
        <SliderContainer>
          <p>{`Search Radius: ${slider / 10} Kilometers`}</p>
          <Slider
            max={300}
            value={slider}
            onChange={(event, value) => setSlider(value)}
            onChangeCommitted={sliderHandler}
            sx={{
              width: 300,
              color: GLOBAL_SCARLET,
            }}
          />

        </SliderContainer>
      </div>
      )}
      <OfferTableStyle>
        {items || 'No offers found'}
      </OfferTableStyle>

    </StyledOffersTable>
  );
}

export default OffersTable;
