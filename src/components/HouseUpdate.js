// src/components/HouseUpdate.js
import React, { useState, useEffect } from 'react';
import { updateHouse } from '../api';

const HouseUpdate = ({ houseId, onUpdate }) => {
  const [houseData, setHouseData] = useState({ address: '', price: '', name: '', phone: '' });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://654d8ba1cbc325355741a10b.mockapi.io/houses/${houseId}`);
      const data = await response.json();
      setHouseData(data);
    };

    fetchData();
  }, [houseId]);

  const handleChange = (e) => {
    setHouseData({ ...houseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateHouse(houseId, houseData);
    onUpdate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Address:
        <input type="text" name="address" value={houseData.address} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={houseData.price} onChange={handleChange} required />
      </label>
      <label>
        Realtor Name:
        <input type="text" name="name" value={houseData.name} onChange={handleChange} required />
      </label>
      <label>
        Realtor Phone:
        <input type="text" name="phone" value={houseData.phone} onChange={handleChange} required />
      </label>
      <button type="submit" style={{ color: 'blue', marginLeft: '8px' }}>Update Listing</button>
    </form>
  );
};

export default HouseUpdate;
