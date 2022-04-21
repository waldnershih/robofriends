import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	console.log("CardList");
	const renderRobots = robots.map((robot) => {
		return (
			<Card
				key={robot.id} // the key value should be the one never to change
				id={robot.id}
				name={robot.name}
				email={robot.email}
			/>
		);
	});
	return <div>{renderRobots}</div>; // jsx syntax
};

export default CardList;
