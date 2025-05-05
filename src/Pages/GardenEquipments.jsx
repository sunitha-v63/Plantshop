import React, { useEffect, useState } from 'react';
import PlantGrid from '../Components/PlantGrid';
import Social from '../Components/Social';

function GardenEquipments() {
  const [gardendata, setgardendata] = useState([]);

  useEffect(() => {
    fetch('/gardendata.json')
      .then((response) => response.json())
      .then((data) => setgardendata(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {gardendata.length > 0 ? (
        <PlantGrid title="Garden Equipments" initialData={gardendata}  redirectPath="/gardendescripition" />
      ) : (
        <p>Loading plants...</p> 
      )}
      <Social />
    </div>
  );
}

export default GardenEquipments;
