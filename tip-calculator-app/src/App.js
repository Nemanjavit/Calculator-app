import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import "./css/App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Dollar from "./svgs/Dollar";
import { setConfiguration } from "react-grid-system";

function App() {
	const [input, setInput] = useState({ bill: "", people: "", custom: "" });
	const [tipAmount, setTipAmount] = useState(0);
	const [message, setMessage] = useState("");
	const [btnActive, setBtnActive] = useState(false);
	const [total, setTotal] = useState(0);

	setConfiguration({ breakpoints: [576, 768, 992, 1200, 1400] });

	const addBill = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		customCalc();
		errorMsg();
	}, [input.custom, input.bill, input.people]);

	const customCalc = () => {
		let percent = parseInt(input.custom);

		if (percent) {
			let res =
				((percent / 100) * parseInt(input.bill)) / parseInt(input.people);
			console.log("sad");
			let total =
				((percent / 100) * parseInt(input.bill) + parseInt(input.bill)) /
				parseInt(input.people);
			setTotal(total.toFixed(2));
			setTipAmount(res.toFixed(2));
			setBtnActive(true);
		}
	};

	const twoCalls = (percent) => {
		setInput({ ...input, custom: "" });
		let res = ((percent / 100) * parseInt(input.bill)) / parseInt(input.people);
		let total =
			((percent / 100) * parseInt(input.bill) + parseInt(input.bill)) /
			parseInt(input.people);
		setTotal(total.toFixed(2));
		setTipAmount(res.toFixed(2));
		setBtnActive(true);
	};

	const resetFields = () => {
		setInput({ bill: "", people: "", custom: "" });
		setTipAmount("");
		setBtnActive(false);
		setTotal("");
		console.log("click");
	};

	const errorMsg = () => {
		if (input.people === "" || input.people === 0) {
			setMessage("Can't be zero");
		} else {
			setMessage("");
		}
	};

	return (
		<div className="App">
			<Container>
				<h1 className="app__heading">
					SPLI<br></br>TTER
				</h1>
				<Row className="main">
					<Col xs={12} md={12} lg={12} xl={12} xxl={6}>
						<div className="input__section">
							<div className="input__wrapper">
								<Input
									id="bill"
									label="Bill"
									name="bill"
									changeHandler={addBill}
									value={input.bill}
									style="input"
									placeHolder="0"
								/>
							</div>
							<h4 className="button__section__heading">Select Tip %</h4>
							<Row className="button__section">
								<Button clickHandler={() => twoCalls(5)} name="5%" />
								<Button clickHandler={() => twoCalls(10)} name="10%" />
								<Button clickHandler={() => twoCalls(15)} name="15%" />
								<Button clickHandler={() => twoCalls(25)} name="25%" />
								<Button clickHandler={() => twoCalls(50)} name="50%" />
								<Col xs={6} md={6} lg={6} xl={4}>
									<Input
										style="input customInput"
										id="customInput"
										name="custom"
										placeHolder="Custom"
										value={input.custom}
										changeHandler={addBill}
									/>
								</Col>
							</Row>
							<div className="input__wrapper person">
								<Input
									id="person"
									name="people"
									label="Number of People"
									changeHandler={addBill}
									value={input.people}
									style="input"
									message={message}
									placeHolder="0"
								/>
							</div>
						</div>
					</Col>
					<Col xs={12} md={12} lg={12} xl={12} xxl={6}>
						<div className="display__section">
							<Row justify="center" style={{ flexGrow: 1 }}>
								<Col sm={12}>
									<Row align="center">
										<Col xs={4}>
											<div className="amount">
												<h3>Tip Amount</h3>
												<p>/person</p>
											</div>
										</Col>
										<Col xs={8}>
											<h2>
												<Dollar className="tipSvg" />
												{isNaN(tipAmount) || !isFinite(tipAmount)
													? 0
													: tipAmount}
											</h2>
										</Col>
									</Row>
								</Col>
								<Col sm={12}>
									<Row align="center">
										<Col xs={4}>
											<div className="amount">
												<h3>Total</h3>
												<p>/person</p>
											</div>
										</Col>
										<Col xs={8}>
											<h2>
												<Dollar className="tipSvg" />
												{isNaN(total) || !isFinite(total) ? 0 : total}
											</h2>
										</Col>
									</Row>
								</Col>
							</Row>
							<button
								className={`resetButton ${btnActive ? "btn-active" : ""}`}
								onClick={btnActive ? resetFields : null}
							>
								RESET
							</button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
