import React, { useState } from 'react';
import axios from 'axios';

const PlantIdentifier = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const identifyPlant = async () => {
    if (!image) {
      setError('Please upload an image');
      return;
    }

    const formData = new FormData();
    formData.append('images', image);
    formData.append('organs', ['leaf']);
    formData.append('details', JSON.stringify([
      'common_names',
      'wiki_description',
      'taxonomy',
      'growth',
      'best_soil_type'
    ]));

    try {
      const res = await axios.post('https://api.plant.id/v2/identify', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Api-Key': '3yj4xJypOqKxyNUkNOtR6gXW7lyUmFduOVAHZmTVvuIr8XW741'
        }
      });

      console.log(res.data);
      setResult(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Error occurred while identifying the plant. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-600">Identify a Plant</h2>
  
      <div className="mb-4">
        <label htmlFor="file-upload" className="block text-lg font-medium text-gray-700">Upload an Image</label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-2 p-2 border-2 border-gray-300 rounded-lg w-full"
        />
      </div>
  
      <div className="flex justify-center mb-4">
        <button
          onClick={identifyPlant}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Identify
        </button>
      </div>
  
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
  
      {result && (
        <div className="mt-6">
          <h3 className="font-semibold text-xl text-center mb-4">Results:</h3>
          {result.suggestions.map((suggestion, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-bold text-lg">{suggestion.plant_name}</p>
              <p className="text-sm text-gray-700">Probability: {(suggestion.probability * 100).toFixed(2)}%</p>
              {suggestion.best_soil_type && (
                <p className="mt-2 text-sm text-gray-600">{suggestion.best_soil_type}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default PlantIdentifier;
