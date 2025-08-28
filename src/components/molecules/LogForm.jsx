import ButtonLog from "../atoms/ButtonLog"
import { UserContext } from "../../contexts/UserContext"
import { useState, useContext } from "react"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

function LogForm(){
    const {setToken} = useContext(UserContext)
    const [theForm, setTheForm] = useState({email: "", password: ""})
    const [theError, setTheError] = useState({})
    const navigate = useNavigate()
    const validate = ()=> {
        const theErrorMessage = {}
        if(!theForm.email.includes("@")){
            theErrorMessage.email = "No email or invalid input"
        }
        if(!theForm.password){
            theErrorMessage.password = "Input correct password"
        }
        return theErrorMessage
    }
    const redirectTo = new URLSearchParams(location.search).get("redirectTo") || "/"
    const logMutation = useMutation({
        mutationFn: (theForm) =>
        fetch("https://test.blockfuselabs.com/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(theForm)
            })
            .then((res)=> res.json()),
            onSuccess: (data) => {
            if(data.token){
                setToken(data.token)
                localStorage.setItem('user', JSON.stringify(data.user))
            }
            alert("Login Successful")
            setTheForm({ email: "", password: ""})
            navigate(redirectTo)
        }
    })
    const handlingChange = (e) =>{
        setTheForm({...theForm, [e.target.name]: e.target.value})
        setTheError({...theError, [e.target.name]: ""})
    }
    const handlingSubmit = (e) => {
        e.preventDefault()
        const theErrors = validate()
        if(Object.keys(theErrors).length > 0){
            setTheError(theErrors)
        } else { 
            logMutation.mutate(theForm)
        }
    }

    return(
        <div className="flex flex-col border-red-500 border-2 justify-center shadow-lg mt-9 md:mt-7 mx-[30px] md:mx-auto max-w-4xl w-auto h-4/5 md:h-3/4 px-1 py-1 md:px-6 md:py-2 bg-[#f7fbef] rounded-lg">
            <div className="flex justify-center">
                <div className="p-2 m-2 h-14 w-72 md:p-4 md:m-2 bg-gradient-to-r from-lime-50 via-[#ffffff] to-lime-50 shadow-md text-center md:h-20 md:w-[550px]">
                    <h2 className="text-2xl md:text-4xl font-bold text-black">Welcome back</h2>
                </div>
            </div>
            <form className="flex flex-col md:w-full w-auto max-w-md mx-2 md:mx-0 md:ml-40 pt-5 gap-3" onSubmit={handlingSubmit}>
                <label >Email address</label> {theError.email && <span className="text-base text-[#f00a31]">{theError.email}</span>}
                <input type="email" onChange={handlingChange} value={theForm.email} name="email" placeholder="E-mail" className="border border-red-400 p-5 text-base h-10 ml-3 hover:border-2  hover:ease-in-out hover:delay-200 focus:outline-none focus:border-red-500 placeholder-slate-400 hover:placeholder-slate-600" />
                <label >Password</label> {theError.password && <span className="text-base text-[#f00a31]">{theError.password}</span>}
                <input type="password" onChange={handlingChange} value={theForm.password} name="password" placeholder="Your password" className="border border-red-400 p-5 text-base h-10 ml-3 hover:border-2 hover:ease-in-out hover:delay-200 focus:outline-none focus:border-red-500 placeholder-slate-400 hover:placeholder-slate-600" /> <br />
                <ButtonLog disabled={logMutation.isPending} />
            </form>
            <p className="text-center">Forgot password? <a href="#" className="font-bold">Click here</a></p>
            <div className="mt-4 mx-14 w-[300px] md:mx-auto text-sm md:text-base text-black bg-white p-4 rounded shadow-md border border-red-500 hidden"></div>
        </div>
    )
}
export default LogForm