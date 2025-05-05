import React, { useEffect, useState } from 'react';
import PlantGrid from '../Components/PlantGrid';
import Social from '../Components/Social';

function DeskPlant() {
  const [deskPlant, setDeskPlants] = useState([]);
  const [error, setError] = useState(null); // To track any fetch errors

  useEffect(() => {
    fetch('/deskdata.json') // Ensure this is correct relative path
      .then((response) => response.json())
      .then((data) => {
        console.log("Desk Data:", data); // Debugging line to check the data
        setDeskPlants(data);
      })
      .catch((error) => {
        console.error('Error fetching desk data:', error);
        setError('Failed to load plants. Please try again later.');
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p> 
      ) : deskPlant.length > 0 ? (
        <PlantGrid title="Desk Plants" initialData={deskPlant} redirectPath="/deskdescripition" />
      ) : (
        <p>Loading plants...</p>
      )}
      <Social />
    </div>
  );
}

export default DeskPlant;
