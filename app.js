console.log("it works");

const searchBtnEl = document.querySelector(".searchBtn");
const containerEl = document.querySelector(".container");
const countriesContainer = document.querySelector(".countries");

const fetchCountries = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const renderCountry = function (data) {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <p class="country__row"><span>Population</span>${data.population}</p>
      <p class="country__row"><span>Capital</span>${data.capital}</p>
      <p class="country__row"><span>Area</span>${data.area}</p>
    </div>
  </article>
  `;
};

fetchCountries();
