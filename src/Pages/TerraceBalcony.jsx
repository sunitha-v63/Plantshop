import React, { useEffect, useState } from 'react';
import PlantGrid from '../Components/PlantGrid';
import Social from '../Components/Social';

function TerraceBalcony() {
  const [terraceData, setTerraceData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setTerraceData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {terraceData.length > 0 ? (
        <PlantGrid title="Terrace Plants" initialData={terraceData}  redirectPath="/imgdescripition" />
      ) : (
        <p>Loading plants...</p> 
      )}
      <Social />
    </div>
  );
}

export default TerraceBalcony;
