import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import List from "./components/Cats/index";
import ElephantList from "./components/Elephant";
import SheepList from "./components/Sheep";
//BrowserRouter:
//Switch:to replace the new componet with old one
//Route: where we specify the linking
//Link: works like an anchor tag <a> <a/>

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<h1>This is the Animal World</h1>
				<ul>
					<li>
						<Link to="/cat">Cat</Link>
					</li>
					<li>
						<Link to="/sheep">Sheep</Link>
					</li>
					<li>
						<Link to="/elephant">Elephant</Link>
					</li>
				</ul>
				<Switch>
          
					<Route path="/sheep">
						<SheepList />
					</Route>
					<Route path="/cat">
						<List />
					</Route>
					<Route path="/Elephant">
						<ElephantList />
					</Route>
				</Switch>
        
			</div>
		</BrowserRouter>
	);
}
//start routh path from longest word to shortest so link can get up to the longest path elephant,elephan,elepha,eleph,elep,ele,el,e
export default App;
