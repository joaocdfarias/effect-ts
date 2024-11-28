const main = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/garchomp/");

  if (!response) {
    throw new Error("Response not okay");
  }

  const json = await response.json();
  return json;
};

main().then(console.log);
