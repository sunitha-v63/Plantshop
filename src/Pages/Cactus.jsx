import React, { useEffect, useState } from 'react';
import PlantGrid from '../Components/PlantGrid';
import Social from '../Components/Social';

function Cactus() {
  const [Cactusdata, setCactusdata] = useState([]);

  useEffect(() => {
    fetch('/cactus.json')
      .then((response) => response.json())
      .then((data) => setCactusdata(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {Cactusdata.length > 0 ? (
        <PlantGrid title="Cactus" initialData={Cactusdata}  redirectPath="/cautusdescripition" />
      ) : (
        <p>Loading plants...</p> 
      )}
      <Social />
    </div>
  );
}

export default Cactus;
