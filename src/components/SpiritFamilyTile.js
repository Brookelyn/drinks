import React from 'react';

export const SpiritFamilyTile = (props) => {


	return (
		<div>
		  <h2>{props.name}</h2>
		</div>
	);
}

SpiritFamilyTile.propTypes = {
	name: React.PropTypes.string
}
