// src/services/api.js

const buscarDados = async () => {
  try {
    const response = await fetch("https://burgers-hub.p.rapidapi.com/burgers", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a99c5045c1mshf96d97c82c4645dp1a8b2bjsnf58727ffa506",
        "X-RapidAPI-Host": "burgers-hub.p.rapidapi.com",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar hambúrgueres:", error);
    return []; // retorna array vazio em caso de erro
  }
};

export default buscarDados;
