import React, { useState } from 'react';

const Donate = () => {
    const [step, setStep] = useState(1);
    const [donationType, setDonationType] = useState('money');
    const [amount, setAmount] = useState('');
    const [notes, setNotes] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [cardInfo, setCardInfo] = useState({
    cardType: '',
    name: '',
    expiry: '',
    address: '',
    postcode: '',
    city: '',
    country: '',
    phone: '',
});

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${amount}!`);
};

const donationAmounts = [1, 5, 10, 25, 50, 100, 250, 500, 1000];

return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-4 flex flex-col items-center">
    {step === 1 && (
    <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
    <div className="flex justify-between items-center mb-4">
    <div />
    <h2 className="text-xl font-bold text-center">Donation Form</h2>
    <button onClick={() => setStep(2)}>➡️</button>
    </div>

    <label className="block font-semibold mb-1">Donation Type:</label>
    <div className="flex gap-2 mb-3">
    <button
    className={`w-full px-4 py-2 rounded ${donationType === 'money' ? 'bg-green-600 text-white' : 'bg-white border'}`}
    onClick={() => setDonationType('money')}
    >
    Cash Donation
    </button>
    <button
    className={`w-full px-4 py-2 rounded ${donationType === 'supplies' ? 'bg-green-600 text-white' : 'bg-white border'}`}
    onClick={() => setDonationType('supplies')}
    >
    Resource Donation
    </button>
    </div>

    {donationType === 'money' ? (
    <>
    <p className="font-medium mb-2">Select an amount:</p>
    <div className="grid grid-cols-3 gap-2">
    {donationAmounts.map((val) => (
    <button
    key={val}
    className={`py-2 rounded-lg border ${amount == val ? 'bg-green-600 text-white' : 'bg-white'}`}
    onClick={() => setAmount(val)}
    >
    ${val}
    </button>
    ))}
    </div>
    <input
    type="number"
    placeholder="Custom Amount"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className="mt-4 w-full p-2 border rounded"
    />
    </>
    ) : (
    <textarea
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    placeholder="Describe the supplies you are donating..."
    className="w-full p-2 mt-3 border rounded"
    rows={4}
    />
    )}
    </div>
    )}

    {step === 2 && (
    <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
    <div className="flex justify-between items-center mb-4">
    <button onClick={() => setStep(1)}>⬅️</button>
    <h2 className="text-xl font-bold text-center">Payment Type</h2>
    <button onClick={() => setStep(3)}>➡️</button>
    </div>

    <div className="grid grid-cols-3 gap-2 mb-4">
    {['Credit Card', 'PayPal', 'ApplePay'].map((method) => (
    <button
    key={method}
    onClick={() => setPaymentMethod(method)}
    className={`p-2 rounded border ${paymentMethod === method ? 'bg-green-500 text-white' : ''}`}
    >
    {method}
    </button>
    ))}
    </div>

    <div className="space-y-3">
    <select
    className="w-full p-2 border rounded"
    onChange={(e) => setCardInfo({ ...cardInfo, cardType: e.target.value })}
    >
    <option>Card type...</option>
    <option>Visa</option>
    <option>MasterCard</option>
    <option>AmEx</option>
    </select>

    <input
    type="text"
    placeholder="Name on card..."
    className="w-full p-2 border rounded"
    onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
    />

    <input
    type="text"
    placeholder="Expiry date..."
    className="w-full p-2 border rounded"
    onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
    />

    <input
    type="text"
    placeholder="Full name..."
    className="w-full p-2 border rounded"
    onChange={(e) => setCardInfo({ ...cardInfo, address: e.target.value })}
    />

    <div className="flex gap-2">
    <input
    type="text"
    placeholder="Postcode*"
    className="w-1/2 p-2 border rounded"
    onChange={(e) => setCardInfo({ ...cardInfo, postcode: e.target.value })}
    />
    <input
    type="text"
    placeholder="City*"
    className="w-1/2 p-2 border rounded"
    onChange={(e) => setCardInfo({ ...cardInfo, city: e.target.value })}
    />
    </div>

    <input
    type="text"
    placeholder="Country..."
    className="w-full p-2 border rounded"
    onChange={(e) => setCardInfo({ ...cardInfo, country: e.target.value })}
    />

    <input
    type="text"
    placeholder="Phone Number..."
    className="w-full p-2 border rounded"
    onChange={(e) => setCardInfo({ ...cardInfo, phone: e.target.value })}
    />
    </div>
    </div>
    )}

    {step === 3 && (
    <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg">
    <div className="flex justify-between items-center mb-4">
    <button onClick={() => setStep(2)}>⬅️</button>
    <h2 className="text-xl font-bold text-center">Total Amount Due</h2>
    <div />
    </div>

    <p className="text-lg font-medium mb-2">Total Donated Cash: ${amount}</p>
    <p className="text-xl font-bold mb-4">Total Due: ${amount}</p>

    <p className="text-sm text-gray-600 italic">
    ⚠️ Please note! Donations may be eligible for tax deductibility depending on your jurisdiction. Consult a tax professional.
    </p>

    <button
    onClick={handleSubmit}
    className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
    >
    Confirm Donation
    </button>
    </div>
    )}
    </div>
);
};

export default Donate;