// Get spirit families for homepage tiles

export const loadSpiritFamilies = () => {
	return fetch('http://localhost:8080/spiritFamily')
	.then(res => res.json());
}