import React from 'react';

const getCurrentDate = () => {
  const today = new Date();
  return today.toLocaleDateString('sl-SI', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const dailyMeals = [
  {
    name: 'Goveja juha z rezanci in govedina, pražen krompir, špinača',
    price: '8,90 €',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80'
  },
  {
    name: 'Svinjska pečenka, mlinci, dušeno zelje',
    price: '9,50 €',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80'
  },
  {
    name: 'Zelenjavna rižota s parmezanom',
    price: '7,90 €',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80'
  }
];

const MenuHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-4">Dnevna ponudba</h2>
        <p className="text-xl text-center text-gray-600 mb-12">{getCurrentDate()}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {dailyMeals.map((meal, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={meal.image}
                alt={meal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Malica {index + 1}</h3>
                <p className="text-gray-700 mb-4">{meal.name}</p>
                <p className="text-xl font-semibold text-gray-900">{meal.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
            Celoten Meni
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;