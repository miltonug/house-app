// src/api.js
const apiUrl = 'https://654d8ba1cbc325355741a10b.mockapi.io/houses';

// Get the data from the api
const fetchHouses = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

// Create a new data entry
const createHouse = async (house) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(house),
  });
  const data = await response.json();
  return data;
};

// Update existing data
const updateHouse = async (id, house) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(house),
  });
  const data = await response.json();
  return data;
};

// Delete existing data
const deleteHouse = async (id) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });
  return response.status;
};

export { fetchHouses, createHouse, updateHouse, deleteHouse };
