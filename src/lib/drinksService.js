// Get load drinks and drink detail

const drinksUrl = 'http://localhost:8080/drinks';

export const loadDrinks = () => {
	return fetch(drinksUrl)
	.then(res => res.json());
}

export const loadDrinkDetail = (spirit, id) => {
	debugger;
	let drinks = this.loadDrinks();
	let drink = drinks.find(drink => {
		return drink.id === id;
	});

}