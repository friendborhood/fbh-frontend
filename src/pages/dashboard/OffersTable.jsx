/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Slider, Stack } from '@mui/material';
import { network, END_POINTS } from '../../network';
import ItemCard from '../../components/ItemCard/ItemCard';
import CategoryMenu from '../../components/Categories/CategoryMenu';

const OfferTableStyle = styled.div`
display: flex;
  gap: 15px;
  flex-wrap: wrap;
  gap: 40px;
  padding-left: 23px;
  padding-right: 21px;
  overflow-y: scroll;
  height: 100%;
  justify-content: center;
`;

function OffersTable() {
  const [slider, setSlider] = useState(50);
  const [radius, setRadius] = useState(5);
  const [offers, setOffers] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [sortMethod, setSelectedSortMethod] = useState('Nearest First');

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
    console.log(relevantCategories);
    return relevantCategories;
  };
  const fetchOffersHandler = async () => {
    const params = {};
    params.radius = radius * 1000;
    if (sortMethod === 'Newest First') {
      params.newest = true;
    }

    params.categories = fetchSelectedCategories();
    const { data } = await network.get(
      `${END_POINTS.OFFERS}/in-area`,
      { params },
    );
    setOffers(data);
  };
  useEffect(() => {
    console.log('offers dashboard use effect run');
    fetchOffersHandler();
  }, [radius, sortMethod, selectedCategories]);
  const sliderHandler = (event, newValue) => {
    setSlider(newValue);
    setRadius(newValue / 10);
  };
  const items = offers.map((offer, index) => <ItemCard offerData={offer} key={index} />);
  return (
    <div>

      <CategoryMenu
        categoriesChanged={selectedCategories}
        setCategoriesChanged={setSelectedCategories}
        selectedSortMethod={sortMethod}
        setSelectedSortMethod={setSelectedSortMethod}
      />
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" />
      <div style={{ maxWidth: 500 }}>
        <p>{`Search Radius: ${radius}`}</p>
        <Slider size="small" value={slider} onChange={sliderHandler} />

      </div>
      <OfferTableStyle>
        {items || 'No offers found'}
      </OfferTableStyle>

    </div>
  );
}

export default OffersTable;
