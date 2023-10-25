import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		dob: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
					<Link to="/login">
						<button type="button" className={styles.white_btn} style={{backgroundColor: "#3bb19b"}}>
							LOGIN
						</button>
					</Link>
					<label style={{marginLeft: '-260px', marginTop: '20px'}} htmlFor="firstName">Name</label>
						<input
							type="text"
							placeholder="name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<label style={{marginLeft: '-230px', marginTop: '20px'}} htmlFor="dob">Date of Birth</label>
						<input
							type="date"
							placeholder="Date of birth"
							pattern="\d{4}-\d{2}-\d{2}"
							name="dob"
							onChange={handleChange}
							value={data.dob}
							required
							className={styles.input}
						/>
						<label style={{marginLeft: '-270px', marginTop: '20px'}} htmlFor="email">Email</label>
						<input
							type="email"
							placeholder="email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<label style={{marginLeft: '-250px', marginTop: '20px'}} htmlFor="password">Password</label>
						<input
							type="password"
							placeholder="password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn} style={{borderRadius: "10px"}}>
							SIGN IN
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
