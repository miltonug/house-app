// src/App.js
import React, { useState, useEffect } from 'react';
import HouseCreate from './components/HouseCreate';
import HouseUpdate from './components/HouseUpdate';
import HouseDelete from './components/HouseDelete';
import { fetchHouses } from './api';
import './App.css';

const App = () => {
  const [houses, setHouses] = useState([]);
  const [selectedHouseId, setSelectedHouseId] = useState(null);

  useEffect(() => {
    const getHouses = async () => {
      const data = await fetchHouses();
      setHouses(data);
    };
    getHouses();
  }, [selectedHouseId]);

  const handleCreate = (newHouse) => {
    setHouses([...houses, newHouse]);
  };

  const handleUpdate = async () => {
// Refetch houses after an update
    await fetchHouses().then((data) => setHouses(data));
    setSelectedHouseId(null);
  };

  const handleDelete = async () => {
// Refetch houses after a delete
    await fetchHouses().then((data) => setHouses(data));
    setSelectedHouseId(null);
  };

//Return house listings displayed in a table
  return (
    <div className="App">
      <h1>Real Estate Listings</h1>
      <HouseCreate onCreate={handleCreate} />
      <br></br>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Listing Street Address</th>
            <th>Current Listing Price</th>
            <th>Realtor Name</th>
            <th>Realtor Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr key={house.id}>
              <td>{house.id}</td>
              <td>{house.address}</td>
              <td>${house.price}</td>
              <td>{house.name}</td>
              <td>{house.phone}</td>
              <td>
                <button onClick={() => setSelectedHouseId(house.id)} style={{ color: 'blue', marginLeft: '8px' }}>Update</button>
                <HouseDelete houseId={house.id} onDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedHouseId && (
        <div>
          <h2>Update Listing</h2>
          <HouseUpdate houseId={selectedHouseId} onUpdate={handleUpdate} />
        </div>
      )}
    </div>
  );
};

export default App;
