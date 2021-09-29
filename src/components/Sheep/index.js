import { Link } from "react-router-dom";
const SheepList = () => {
	return (
		<section>
			<Link to="/">Home</Link>
			<h1>Sheep</h1>
			<img
				src="https://images.unsplash.com/photo-1533415648777-407b626eb0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
				alt="sheep"
			/>
		</section>
	);
};

export default SheepList;
