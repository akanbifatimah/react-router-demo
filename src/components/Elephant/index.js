import { Link } from "react-router-dom";
const ElephantList = () => {
	return (
		<section>
			<Link to="/">Home</Link>
			<h1>Elephant</h1>
			<img src="https://images.unsplash.com/photo-1570263849386-fafb59c56a1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" />
		</section>
	);
};

export default ElephantList;
