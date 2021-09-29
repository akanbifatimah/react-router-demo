import { Link } from "react-router-dom";
const List = () => {
	return (
		<section>
			<Link to="/">Home</Link>
			<h1>Cat</h1>
			<img
				src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
				alt="cat"
			/>
		</section>
	);
};

export default List;
