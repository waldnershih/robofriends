import React, { useState, useEffect, useMemo } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { setSearchField, requestRobots } from "../redux/actions";
import "../styles/App.css";
import Header from "../components/Header";

const App = () => {
	const [searchResults, setSearchResults] = useState([]);

	const text = useSelector((state) => state.searchRobots.searchField);

	const robosUsers = useSelector((state) => state.requestRobots.robots);
	const isPending = useSelector((state) => state.requestRobots.isPending);

	const dispatch = useDispatch();

	const header = useMemo(() => <Header />, []);

	const onSearchChange = (e) => {
		dispatch(setSearchField(e.target.value));
	};

	useEffect(() => {
		dispatch(requestRobots());
	}, [dispatch]);

	useEffect(() => {
		let filteredRobots = robosUsers.filter((robots) => {
			return robots.name.toLowerCase().includes(text.toLowerCase());
		});
		setSearchResults(filteredRobots);
	}, [text, robosUsers]);

	const newRobot = searchResults;

	return isPending ? (
		<h1>Loading...</h1>
	) : (
		<div className="tc">
			{header}
			{/* <Header /> */}
			<SearchBox searchChange={onSearchChange} searchField={text} />

			<Scroll>
				{text === "" ? (
					<CardList robots={robosUsers} />
				) : (
					<CardList robots={newRobot} />
				)}
			</Scroll>
		</div>
	);
};

export default App;
