import React from 'react';

const Introduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-serif text-gray-900 mb-6">Dobrodošli v Domači Hiši</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            V Domači Hiši verjamemo v pristnost tradicionalnega kuhanja. 
            Vsaka jed je pripravljena z ljubeznijo, po receptih, ki se prenašajo iz roda v rod.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Naša kuhinja je prostor, kjer se sodobno znanje sreča s časovno preizkušenimi tradicijami, 
            ustvarjajoč jedi, ki vas spomnijo na toplino in udobje babičine kuhinje.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&q=80"
            alt="Notranjost restavracije"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-gray-900 font-medium">Odprti vsak dan</p>
            <p className="text-gray-600">6:00 - 22:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;