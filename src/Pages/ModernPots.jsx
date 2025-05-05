import React, { useEffect, useState } from 'react';
import PlantGrid from '../Components/PlantGrid';
import Social from '../Components/Social';

function ModernPots() {
  const [moderndata, setmoderndata] = useState([]);

  useEffect(() => {
    fetch('/moderndata.json')
      .then((response) => response.json())
      .then((data) => setmoderndata(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {moderndata.length > 0 ? (
        <PlantGrid title="Modern Pots" initialData={moderndata}  redirectPath="/moderndescripition" />
      ) : (
        <p>Loading plants...</p> 
      )}
      <Social />
    </div>
  );
}

export default ModernPots;
