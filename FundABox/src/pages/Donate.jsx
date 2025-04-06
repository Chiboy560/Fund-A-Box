import React, { useState } from 'react';

const Donate = () => {
  const [donationType, setDonationType] = useState('money');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Donation Type:', donationType);
    console.log('Amount:', amount);
    console.log('Notes:', notes);

    alert('Thank you for your donation!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Make a Donation</h1>
      
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Choose your donation type</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Donation Type</label>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                onClick={() => setDonationType('money')}
                className={`px-4 py-2 rounded ${donationType === 'money' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              >
                Money
              </button>
              <button
                type="button"
                onClick={() => setDonationType('supplies')}
                className={`px-4 py-2 rounded ${donationType === 'supplies' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              >
                Supplies
              </button>
            </div>
          </div>

          {donationType === 'money' && (
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Donation Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter amount in USD"
                required
              />
            </div>
          )}

          {donationType === 'supplies' && (
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">What supplies are you donating?</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Describe the supplies you want to donate"
                rows="4"
                required
              />
            </div>
          )}

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;