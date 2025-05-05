import React, { useEffect, useState } from 'react';
import PlantGrid from '../Components/PlantGrid';
import Social from '../Components/Social';

function Bonsai() {
  const [Bonsaidata, setBonsaidata] = useState([]);

  useEffect(() => {
    fetch('/bonsaidata.json')
      .then((response) => response.json())
      .then((data) => setBonsaidata(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {Bonsaidata.length > 0 ? (
        <PlantGrid title="Bonsai Trees" initialData={Bonsaidata}  redirectPath="/bonsaidescripition" />
      ) : (
        <p>Loading plants...</p> 
      )}
      <Social />
    </div>
  );
}

export default Bonsai;
