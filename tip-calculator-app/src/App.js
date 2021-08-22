import { Container, Row, Col } from "react-grid-system";
import "./App.scss";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
	return (
		<div className="App">
			<Container>
				<Row className="main">
					<Col sm={6}>
						<div className="input__section">
							<div className="input__wrapper">
								<Input id="bill" label="Bill" />
							</div>
							<h4 className="button__section__heading">Select Tip %</h4>
							<Row className="button__section">
								<Button name="5%" />
								<Button name="10%" />
								<Button name="15%" />
								<Button name="25%" />
								<Button name="50%" />
								<Button name="custom" />
							</Row>
							<div className="input__wrapper person">
								<Input id="person" label="Number of People" />
							</div>
						</div>
					</Col>
					<Col className="display__section" sm={6}></Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
