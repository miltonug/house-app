// src/components/HouseDelete.js
import React from 'react';
import { deleteHouse } from '../api';

const HouseDelete = ({ houseId, onDelete }) => {
  const handleDelete = async () => {
    await deleteHouse(houseId);
    onDelete();
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red', marginLeft: '8px' }}>
      Delete
    </button>
  );
};

export default HouseDelete;
