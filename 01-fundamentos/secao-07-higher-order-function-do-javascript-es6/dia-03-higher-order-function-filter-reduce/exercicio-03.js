// Fonte: <https://restcountries.com/v2/all>
const countries = [
	{
		name: "Afghanistan",
		region: "Asia",
		currencies: [{ code: "AFN", name: "Afghan afghani" }],
		capital: "Kabul",
		population: 40218234,
		area: 652230,
	},
	{
		name: "Åland Islands",
		region: "Europe",
		currencies: [{ code: "EUR", name: "Euro" }],
		capital: "Mariehamn",
		population: 28875,
		area: 1580,
	},
	{
		name: "Albania",
		region: "Europe",
		currencies: [{ code: "ALL", name: "Albanian lek" }],
		capital: "Tirana",
		population: 2837743,
		area: 28748,
	},
	{
		name: "Algeria",
		region: "Africa",
		currencies: [{ code: "DZD", name: "Algerian dinar" }],
		capital: "Algiers",
		population: 44700000,
		area: 2381741,
	},
	{
		name: "American Samoa",
		region: "Oceania",
		currencies: [{ code: "USD", name: "United States Dollar" }],
		capital: "Pago Pago",
		population: 55197,
		area: 199,
	},
	{
		name: "Andorra",
		region: "Europe",
		currencies: [{ code: "EUR", name: "Euro" }],
		capital: "Andorra la Vella",
		population: 77265,
		area: 468,
	},
	{
		name: "Angola",
		region: "Africa",
		currencies: [{ code: "AOA", name: "Angolan kwanza" }],
		capital: "Luanda",
		population: 32866268,
		area: 1246700,
	},
	{
		name: "Anguilla",
		region: "Americas",
		currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
		capital: "The Valley",
		population: 13452,
		area: 91,
	},
];

const expectedResult = 120797034;
const getPopulation = () =>
	countries.reduce(
		(totalPopulation, country) => totalPopulation + country.population,
		0
	);

const expectedResult2 = 4311757;
const getTotalArea = () =>
	countries.reduce(
		(totalPopulation, country) => totalPopulation + country.area,
		0
	);

const expectedResult3 = {
	name: "American Samoa",
	region: "Oceania",
	currencies: [{ code: "USD", name: "United States Dollar" }],
	capital: "Pago Pago",
	population: 55197,
	area: 199,
};

const longestName = () =>
	countries.reduce((biggerName, country) =>
		country.name.length > biggerName.name.length ? country : biggerName
	);

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult4 = 20;
const countA = () => {
  const lettersArray = names.join('').toLowerCase().split(''); 
  console.log(lettersArray);
  return lettersArray.reduce((countLetterA, letter) => letter === 'a' ? countLetterA += 1: countLetterA, 0)
  // retorne seu código aqui
}

// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
	[9, 8, 10, 7, 5],
	[10, 9, 9, 10, 8],
	[10, 7, 10, 8, 9],
];
const expectedResult5 = [
	{ name: "Pedro Henrique", average: 7.8 },
	{ name: "Miguel", average: 9.2 },
	{ name: "Maria Clara", average: 8.8 },
];
const studentAverage = () =>
	students.map((student, index) => {
		const average =
			grades[index].reduce((total, nota) => total + nota, 0) /
			grades[index].length;
		return { name: student, average };
	});

console.log(countA());
