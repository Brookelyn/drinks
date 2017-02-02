// Get spirit families for homepage tiles

export const loadDrinks = () => {
	return fetch('http://localhost:8080/drinks')
	.then(res => res.json());
}