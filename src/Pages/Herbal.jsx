import React, { useEffect, useState } from 'react';
import PlantGrid from '../Components/PlantGrid';
import Social from '../Components/Social';

function Herbal() {
  const [herbaldata, setherbaldata] = useState([]);

  useEffect(() => {
    fetch('/herbaldata.json')
      .then((response) => response.json())
      .then((data) => setherbaldata(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {herbaldata.length > 0 ? (
        <PlantGrid title="Herbal Indoor Plants" initialData={herbaldata}  redirectPath="/herbaldescripition" />
      ) : (
        <p>Loading plants...</p> 
      )}
      <Social />
    </div>
  );
}

export default Herbal;
