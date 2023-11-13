// src/components/HouseCreate.js
import React, { useState } from 'react';
import { createHouse } from '../api';

const HouseCreate = ({ onCreate }) => {
  const [houseData, setHouseData] = useState({ address: '', price: '', name: '', phone: '' });

  const handleChange = (e) => {
    setHouseData({ ...houseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHouse = await createHouse(houseData);
    onCreate(newHouse);
    setHouseData({ address: '', price: '', name: '', phone: '' });
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
      <button type="submit" style={{ color: 'green', marginLeft: '8px' }}>Create Listing</button>
    </form>
  );
};

export default HouseCreate;
