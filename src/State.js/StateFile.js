import { useState} from "react"
import {useHistory, useHistory} from 'react-router-dom';
import Signup from '../ui/Signup';

const StateFile = () => {
	const [fName, setfName] = useState("")
	const [lName, setlName] = useState("")
	const [mobile, setMobile] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [cpassword, setCpassword] = useState("")
	const history=useHistory();

	const onclickName=(e)=>
	{
		setfName(e.target.value)
	}
	const onclicklast=(e)=>
	{
		setlName(e.target.value)
	}
	const onclickmobile=(e)=>
	{
		setMobile(e.target.value)
	}
	const onclickemail=(e)=>
	{
		setEmail(e.target.value)
	}
	const onclickpassword=(e)=>
	{
		setPassword(e.target.value)
	}
	const onclickcpassword=(e)=>
	{
		setCpassword(e.target.value)
	}
	const PostData=async(e)=>{
		e.preventDefault();
		// const {fName}=fName;
		// const {lName}=lName;
		// const {mobile}=mobile;
		// const {email}=email;
		// const {password}=password;
		// const {cpassword}=cpassword;
		fName:fName;lName:lName;
		mobile:mobile;email:email;
		password:password;cpassword:cpassword;

		const res=await fetch("/register",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				fName,lName,mobile,email,passowrd,cpassword
			})
		});
		const data=await res.json();
		if(data.status===422)
		{
			window.alert("invalid registeration");
			console.log("invalid registeration")
		}
		else{
			window.alert("Registeration Succesful");
			console.log(" Registeration Succesful")
			// history.pushState("/")
		}
	}
	// const Submithandler= (event)=> {
	// 	event.preventDefault();
	// 	const Data={fName,lName,mobile,email,password,cpassword} 
	// 	setPassword('');
	// 	setcPassword('');
//};
	
	return (
		<div>
			<Signup fName={fName} lName={lName} mobile={mobile} email={email} password={password} cpassword={cpassword} onclickName={onclickName} onclicklast={onclicklast} onclickmobile={onclickmobile} onclickemail={onclickemail} onclickpassword={onclickpassword} onclickcpassword={ onclickcpassword} PostData={PostData}/>
		</div>
	)
}
export default StateFile;


