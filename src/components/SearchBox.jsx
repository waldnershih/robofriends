import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
	console.log("SearchBox");
	return (
		<div className="pa2">
			<input
				ariea-aria-label="Search Robots"
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search robots"
				value={searchField}
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
