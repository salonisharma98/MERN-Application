import './Sign.css';

const SignupForm = ({ fname, lname, mobile, emailId, password, cpassword }) => {
	return (
		<div className="container">
			<div className="screens">
				<div className="screens__content">
					<form className="logins">
						<div className="logins__field">
							<i className="logins__icon fas fa-user"></i>
							<input type="text" className="logins__input" placeholder="First Name" value={fname} />
						</div>
						<div className="logins__field">
							<i className="logins__icon fas fa-user" ></i>
							<input type="text" className="logins__input" placeholder="Last Name" value={lname} />
						</div>
						<div className="logins__field">
							<i className="logins__icon fas fa-user"></i>
							<input type="text" className="logins__input" placeholder="Contact No." value={mobile} />
						</div>
						<div className="logins__field">
							<i className="logins__icon fas fa-user"></i>
							<input type="email" className="logins__input" placeholder="Enter your email" value={emailId} />
						</div>
						<div className="logins__field">
							<i className="logins__icon fas fa-lock"></i>
							<input type="password" className="logins__input" placeholder="Password" value={password} />
						</div>
						<div className="logins__field">
							<i className="logins__icon fas fa-lock"></i>
							<input type="password" className="logins__input" placeholder="Confirm Password" value={cpassword} />
						</div>
						<button className="buttons login__submit">
							<span className="button__text">Create Account</span>
							<i className="buttons__icon fas fa-chevron-right"></i>
						</button>
					</form>

				</div>
				<div className="screens__background">
					<span className="screens__background__shape screen__background__shape4"></span>
					<span className="screens__background__shape screen__background__shape3"></span>
					<span className="screens__background__shape screen__background__shape2"></span>
					<span className="screens__background__shape screen__background__shape1"></span>
				</div>
			</div>
		</div>
	);
}
export default SignupForm;