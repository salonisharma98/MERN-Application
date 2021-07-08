import React, { useState } from 'react';
import SignupForm from './SignupForm';
const SignUp = () => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [mobile, setMobile] = useState("");
	const [emailId, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCpassword] = useState("");

	function setValue(e) {
		setFname(e.targe.value)
	}
	return (
		<div>
			<SignupForm fname={fname} lname={lname} mobile={mobile} emailId={emailId} password={password} cpassword={cpassword} />
		</div>
	);
}
export default SignUp