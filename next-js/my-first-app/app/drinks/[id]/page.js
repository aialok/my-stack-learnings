import React from "react";

const fetchSingleData = async (id) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch the drinks");
  }
  const data = await response.json();
  return data;
};

const SinglePageResult = async ({ params }) => {
  const data = await fetchSingleData(params.id);
  return (
    <div>
      <div>
        <h1>{data.drinks[0].strDrink}</h1>
        <img src={data.drinks[0].strDrinkThumb} alt={data.drinks[0].strDrink} />
        <p>{data.drinks[0].strInstructions}</p>
      </div>
    </div>
  );
};

export default SinglePageResult;
