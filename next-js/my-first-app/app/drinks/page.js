const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
import Link from "next/link";
import Image from "next/image";

const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch the drinks");
  }
  const data = await response.json();
  // console.log(data);
  return data;
};

const DrinksPage = async () => {
  const data = await fetchData();

  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full">
        {data.drinks.map((drink) => {
          return (
            <Link
              href={`drinks/${drink.idDrink}`}
              key={drink.strDrink}
              prefetch={true}
              className="w-1/4 p-2 px-4 hover:bg-slate-800 rounded-md"
            >
              <div className="">
                <h1 className="text-2xl">{drink.strDrink}</h1>
                {/* <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}  
                    className="w-1/2"
                  /> */}
                <Image
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  width={300}
                  height={300}
                  className="w-full h-full"
                />

                <p>{drink.strInstructions}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DrinksPage;
