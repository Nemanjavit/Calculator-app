import { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import "./App.scss";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
	const [input, setInput] = useState({ bill: 0, people: 0 });
	const [tipAmount, setTipAmount] = useState(0);

	const addBill = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	console.log(typeof input.bill);

	const calc = () => {
		let res = (5 / 100) * parseInt(input.bill) + parseInt(input.bill);
		console.log(res);
	};

	return (
		<div className="App">
			<Container>
				<Row className="main">
					<Col sm={6}>
						<div className="input__section">
							<div className="input__wrapper">
								<Input
									id="bill"
									label="Bill"
									name="bill"
									changeHandler={addBill}
									value={input.bill}
								/>
							</div>
							<h4 className="button__section__heading">Select Tip %</h4>
							<Row className="button__section">
								<Button clickHandler={calc} name="5%" />
								<Button name="10%" />
								<Button name="15%" />
								<Button name="25%" />
								<Button name="50%" />
								<Button name="custom" />
							</Row>
							<div className="input__wrapper person">
								<Input
									id="person"
									name="people"
									label="Number of People"
									changeHandler={addBill}
									value={input.people}
								/>
							</div>
						</div>
					</Col>
					<Col sm={6}>
						<div className="display__section">
							<Row justify="center" style={{ flexGrow: 1 }}>
								<Col sm={12}>
									<Row justify="between">
										<Col sm={6}>
											<div className="amount">
												<h3>Tip Amount</h3>
												<p>/person</p>
											</div>
										</Col>
										<Col sm={6}>
											<h2>{tipAmount}</h2>
										</Col>
									</Row>
								</Col>
								<Col sm={12}>
									<Row>
										<Col sm={6}>
											<div>
												<h3>Total</h3>
												<p>/person</p>
											</div>
										</Col>
										<Col sm={6}></Col>
									</Row>
								</Col>
							</Row>
							<button className="resetButton ">RESET</button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
