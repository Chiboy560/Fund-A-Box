import React, { useState } from 'react';
import Card from '../components/Card';
import apple from '../assets/apple.png';
import cucumber from '../assets/cucumber.png';
import tomatoe from '../assets/tomato.png';
import potato from '../assets/potato.png';
import beans from '../assets/beans.png';
import radish from '../assets/radish.png';

const Guide = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSeason, setActiveSeason] = useState('all');

  // Updated plant data with proper descriptions and metadata
  const plants = [
    {
      id: 1,
      imagePath: apple,
      title: "Apple",
      text: (
        <div>
          <p className='text-sm'>-Select a sunny spot with well-drained soil. 6 hours of direct sunlight daily.</p>
          <p className='text-sm'>-Plant apple saplings in spring. Space the trees about 15-20 feet apart to allow for growth.</p>
          <p className='text-sm'>-Ensure the soil is fertile and rich.</p>
          <p className='text-sm'>-Water regularly and keep the soil evenly moist. Prune annually to remove dead or diseased branches.</p>
          <p className='text-sm'>-Keep an eye on the tree for signs of pests or disease, and take action as needed to keep it healthy.</p>
        </div>
      ),tags: [],
      category: "fruit",
      season: "spring",
      difficulty: "intermediate"
    },
    {
      id: 2,
      imagePath: cucumber,
      title: "Cucumber",
      text: (
        <div>
          <p className="text-sm">-Choose a spot with at least 6 hours of sunlight per day.</p>
          <p className="text-sm">-Plant cucumber seeds directly in the soil in summer, about 1 inch deep. Space plants 12-18 inches apart.</p>
          <p className="text-sm">-Keep the soil consistently moist but not soggy. Water deeply at the base of the plant.</p>
          <p className="text-sm">-Add a trellis to support the vines, to help keep the fruit off the ground.</p>
          <p className="text-sm">-Harvest cucumbers when they are firm, green, and have reached their full size.</p>
        </div>
      ),
      tags: [],
      category: "vegetable",
      season: "summer",
      difficulty: "beginner"
    },
    {
      id: 3, 
      imagePath: tomatoe,
      title: "Tomato",
      text: (
        <div>
          <p className="text-sm">-Tomatoes thrive in a spot with full sun and well-drained soil.</p>
          <p className="text-sm">-Start seeds indoors in early spring, about 6-8 weeks before the last frost.</p>
          <p className="text-sm">-Water consistently, keeping the soil evenly moist. Avoid wetting the leaves.</p>
          <p className="text-sm">-Use stakes or cages to support the growing plants and keep the fruit off the ground.</p>
          <p className="text-sm">-Pick tomatoes when they are fully ripe, firm, and have developed their full color.</p>
        </div>
      ),
      tags: [],
      category: "vegetable",
      season: "summer",
      difficulty: "beginner"
    },
    {
      id: 4,
      imagePath: potato,
      title: "Potato",
      text: (
        <div>
          <p className="text-sm">-Potatoes require a sunny spot with loose, well-drained soil.</p>
          <p className="text-sm">-Plant seed potatoes in spring, about 4 inches deep and 12 inches apart.</p>
          <p className="text-sm">-Water consistently, keeping the soil moist but not soggy. Be careful not to overwater.</p>
          <p className="text-sm">-As the plants grow, mound soil around the base to help protect the potatoes from the sun.</p>
          <p className="text-sm">-Harvest potatoes when the plants begin to die back.</p>
        </div>
      ),
      tags: [],
      category: "vegetable",
      season: "spring",
      difficulty: "beginner"
    },
    {
      id: 5,
      imagePath: beans,
      title: "Beans",
      text: (
        <div>
          <p className="text-sm">-Beans need a sunny spot with well-drained soil. Choose a location with at least 6 hours of direct sunlight per day.</p>
          <p className="text-sm">-Plant bean seeds in summer, about 1-2 inches deep and 3-4 inches apart. Beans can be planted in rows or with trellises for support.</p>
          <p className="text-sm">-Water beans regularly, keeping the soil evenly moist. Avoid watering the leaves to reduce the risk of fungal diseases.</p>
          <p className="text-sm">-Harvest beans when they are fully grown, but before the pods dry out. Pick regularly to encourage continuous production.</p>
        </div>
      ),
      tags: [],
      category: "vegetable",
      season: "summer",
      difficulty: "beginner"
    },
    {
      id: 6,
      imagePath: radish,
      title: "Radish",
      text: (
        <div>
          <p className="text-sm">-Radishes grow best in full sun and well-drained, fertile soil.</p>
          <p className="text-sm">-Plant radish seeds in spring or fall, about 1/2 inch deep and 1 inch apart.</p>
          <p className="text-sm">-Water consistently, keeping the soil moist. Radishes don’t tolerate drought, so regular watering is important.</p>
          <p className="text-sm">-Radishes grow quickly and should be harvested when the root is about 1 inch in diameter, usually 3-4 weeks after planting.</p>
        </div>
      ),
      tags: [],
      category: "vegetable", 
      season: "spring",
      difficulty: "easy"
    }
  ];

  const filteredPlants = plants.filter(plant => {
    const categoryMatch = activeCategory === 'all' || plant.category === activeCategory;
    const seasonMatch = activeSeason === 'all' || plant.season === activeSeason;
    return categoryMatch && seasonMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <div className="bg-green-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guide to Planting Fruits & Vegetables</h1>
          
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-r border-gray-200 pr-4">
              <h3 className="text-lg font-medium text-green-700 mb-2">Why Grow Your Own?</h3>
              <p className="text-gray-700">
                Growing your own fruits and vegetables provides fresh, nutritious produce right at your doorstep, 
                reduces grocery bills, and creates a rewarding hobby that connects you with nature.
              </p>
            </div>
            <div className="border-r border-gray-200 px-4">
              <h3 className="text-lg font-medium text-green-700 mb-2">Basic Requirements</h3>
              <ul className="text-gray-700">
                <li>-Adequate sunlight (6+ hours daily)</li>
                <li>-Quality soil with good drainage</li>
                <li>-Consistent water source</li>
                <li>-Appropriate climate for chosen plants</li>
                <li>-Basic gardening tools</li>
              </ul>
            </div>
            <div className="pl-4">
              <h3 className="text-lg font-medium text-green-700 mb-2">Getting Started</h3>
              <ol className="text-gray-700">
                <li>-Determine your growing zone</li>
                <li>-Choose a suitable garden location</li>
                <li>-Prepare your soil properly</li>
                <li>-Select plants appropriate for your experience level</li>
                <li>-Follow planting guidelines for each species</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Seasonal Planting Guide</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 flex items-center">
                 Spring
              </h3>
              <ul className="mt-2 text-sm text-gray-700">
                <li>-Prepare soil after last frost</li>
                <li>- Plant cool-season crops</li>
                <li>- Start summer vegetable seeds</li>
                <li>- Plant fruit tree saplings</li>
              </ul>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-800 flex items-center">
                 Summer
              </h3>
              <ul className="mt-2 text-sm text-gray-700">
                <li>- Plant heat-loving vegetables</li>
                <li>- Set up irrigation systems</li>
                <li>- Implement pest control</li>
                <li>- Harvest early crops</li>
              </ul>
            </div>
            <div className="bg-orange-100 p-4 rounded-lg">
              <h3 className="font-medium text-orange-800 flex items-center">
                Fall
              </h3>
              <ul className="mt-2 text-sm text-gray-700">
                <li>- Plant second cool-season crops</li>
                <li>- Harvest summer produce</li>
                <li>- Prepare perennials for winter</li>
                <li>- Collect seeds for next year</li>
              </ul>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 flex items-center">
                 Winter
              </h3>
              <ul className="mt-2 text-sm text-gray-700">
                <li>- Plan next year's garden</li>
                <li>- Start seeds indoors</li>
                <li>- Maintain tools and equipment</li>
                <li>- Learn new gardening techniques</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Plant Directory</h2>
        

        <div className="flex flex-wrap gap-4 mb-8">
          <div>
            <h3 className="text-lg mb-2">Plant Type:</h3>
            <div className="flex gap-2">
              <button 
                className={`px-4 py-2 rounded ${activeCategory === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded ${activeCategory === 'vegetable' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveCategory('vegetable')}
              >
                Vegetables
              </button>
              <button 
                className={`px-4 py-2 rounded ${activeCategory === 'fruit' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveCategory('fruit')}
              >
                Fruits
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Planting Season:</h3>
            <div className="flex gap-2">
              <button 
                className={`px-4 py-2 rounded ${activeSeason === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSeason('all')}
              >
                All Seasons
              </button>
              <button 
                className={`px-4 py-2 rounded ${activeSeason === 'spring' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSeason('spring')}
              >
                Spring
              </button>
              <button 
                className={`px-4 py-2 rounded ${activeSeason === 'summer' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setActiveSeason('summer')}
              >
                Summer
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <Card
              key={plant.id}
              imagePath={plant.imagePath}
              title={plant.title}
              text={plant.text}
              tags={plant.tags}
              height="500px"
              difficulty={plant.difficulty}
              season={plant.season}
            />
          ))}
        </div>
        
        {filteredPlants.length == 0 &&(
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No plants match your selected filters</p>
          </div>
        )}
      </div>
      
      </div>
      
    
  );
};

export default Guide;