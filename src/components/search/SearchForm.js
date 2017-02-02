import React from 'react';

export const SearchForm = (props) => (
	<form onSubmit={props.handleSubmit}>
	  <input
	    type="text"
	    value={props.searchText}
	    onChange={props.handleInputChange}
	  />
	</form>
);

SearchForm.propTypes = {
	searchText: React.PropTypes.string.isRequired,
	handleInputChange: React.PropTypes.func.isRequired,
	handleSubmit: React.PropTypes.func.isRequired
}
