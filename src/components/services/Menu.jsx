import React, { useEffect, useState } from "react";

import buscarDados from "./api";

function Menu() {
  const [burgers, setBurgers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await buscarDados();
      setBurgers(data);
      console.log(data); // Verifique os dados no console
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">Carregando hambúrgueres...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {burgers.map((burger) => (
        <div
          key={burger.id}
          className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
        >
          <img
            src={burger.images[1].lg}
            alt={burger.name}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-bold">{burger.name}</h2>
          <p className="text-sm text-gray-500">{burger.dsc}</p>
          <p className="text-green-600 font-semibold mt-1">${burger.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
