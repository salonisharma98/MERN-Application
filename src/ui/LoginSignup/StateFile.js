// import Signup from './Signup.js';
// import { useState } from 'react';
// const StateFile=()=>
// {
//     const [fName, setfName] = useState("")
// 	const [lName, setlName] = useState("")
// 	const [mobile, setMobile] = useState("")
// 	const [email, setEmail] = useState("")
// 	const [password, setPassword] = useState("")
// 	const [cpassword, setCpassword] = useState("")


// 	const onclickName = (e) => {
// 		setfName(e.target.value)
// 	}
// 	const onclicklast = (e) => {
// 		setlName(e.target.value)
// 	}
// 	const onclickmobile = (e) => {
// 		setMobile(e.target.value)
// 	}
// 	const onclickemail = (e) => {
// 		setEmail(e.target.value)
// 	}
// 	const onclickpassword = (e) => {
// 		setPassword(e.target.value)
// 	}
// 	const onclickcpassword = (e) => {
// 		setCpassword(e.target.value)
// 	}
// 	const Submithandler = (event) => {
// 		event.preventDefault();
// 		const Data = { fName,lName,mobile,email,password,cpassword }
// 		console.log(Data);
// 		setfName('');
// 		setlName('');
// 		setMobile('');
// 		setEmail('');
// 		setPassword('');
// 		setCpassword('');
// 	};

// 	const PostData = async (e) => {
// 		e.preventDefault();
// 		const res = await fetch("http://localhost:5000/register", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify({
// 				fName, lName, mobile, email, password, cpassword
// 			})
// 		});
// 		const data = await res.json();
// 		console.log(data);
// 		if(res.status===400||!data)
// 		{
// 			window.alert('invalid credential')
// 		}
// 		else{
// 			window.alert('Registered Succesfully')
// 		}
// 	}
//     return(
//         <div>
//             <Signup fNames={fName} lNames={lName} mobiles={mobile} emails={email} passwords={password} cpasswords={cpassword} onclickNames={onclickName} onclicklasts={onclicklast} onclickmobiles={onclickmobile} onclickemails={onclickemail} onclickpasswords={onclickpassword} onclickcpasswords={onclickcpassword} Submithandlers={Submithandler} PostDatas={PostData}/>
//         </div>
//     )
// }

// export default StateFile;