import { UserContext } from "../../contexts/UserContext"
import { useContext, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { VscEyeClosed } from "react-icons/vsc";

function FormSign(){
    const [show, setShow] = useState(false)
    const handleClick = ()=> {
        setShow(!show)
    }
    const {setUser} = useContext(UserContext)
    const [form, setForm] = useState({fullname: "", email: "", password: "", team: ""})
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const validate = ()=> {
        const validTeams = ["Phoenix", "404", "Titans", "Pull request", "Elon"];
        const errorMessage = {}
        if(!form.fullname){
            errorMessage.fullname = "Please fill your fullname"
        }
        if(!form.email.trim().includes("@") ){
            errorMessage.email = "No email or invalid email"
        }
        if(!form.password){
            errorMessage.password = "Please set a password"
        }
        if(!validTeams.includes(form.team)){
            errorMessage.team = "Add a valid team"
        }
        return errorMessage
    }
    const regMutation = useMutation({
        mutationFn: (form) =>
        fetch("https://test.blockfuselabs.com/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(form)
            })
            .then((res)=> res.json()),
            onSuccess: (data) => {
            setForm({ fullname: "", email: "", password: "", team: "" })
            setUser(data)
            alert("Registration Successful")
            navigate("/login")
        }
    })
    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
        setError({...error, [e.target.name]: ""})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate()
        if(Object.keys(errors).length > 0){
            setError({...errors, general: "Please fill each field correctly"})
        } else { 
            regMutation.mutate(form)
        }
    }
    return(
        <div className="flex flex-col border-red-500 border-2 justify-center shadow-lg mt-9 md:mt-7 mx-[30px] md:mx-auto max-w-4xl w-auto h-4/5 px-1 py-1 md:px-6 md:py-2 bg-[#f7fbef] rounded-lg">
            <div className="flex justify-center">
                <div className="p-2 m-2 h-14 w-72 md:p-4 bg-gradient-to-r from-lime-50 via-[#ffffff] to-lime-50 shadow-md text-center md:h-20 md:w-[550px]">
                    <h2 className="text-xl sm:text-2xl md:text-4xl mt-2 sm:mt-1 font-bold text-black">Blogify Registration</h2>
                </div>
            </div>
            {error.general && <p className="text-[#f00a31] mx-4 md:mx-0 text-center pt-2">{error.general}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col md:w-full w-auto max-w-md mx-4 md:mx-0 md:ml-40 pt-3 ">
                <label >Fullname</label> {error.fullname && <span className="text-base text-[#f00a31]">{error.fullname}</span>}
                <input value={form.fullname} type="text" onChange={handleChange} name="fullname" className="p-2 mb-2 text-base border border-red-400 h-10 hover:border-2  hover:ease-in-out hover:delay-200 focus:outline-none focus:border-red-500" />
                <label >Email address</label> {error.email && <span className="text-base text-[#f00a31]">{error.email}</span>}
                <input value={form.email} type="email" onChange={handleChange} name="email" className="p-2 mb-2 text-base border border-red-400 h-10 hover:border-2  hover:ease-in-out hover:delay-200 focus:outline-none focus:border-red-500" />
                <label className="flex justify-between">Password <span onClick={handleClick}>{show ? <VscEyeClosed />: "👁️"}</span></label> {error.password && <span className="text-base text-[#f00a31]">{error.password}</span>}
                <input value={form.password} type={show ? "text" : "password"} onChange={handleChange} name="password" className="p-2 mb-2 text-base border border-red-400 h-10 hover:border-2 hover:ease-in-out hover:delay-200 focus:outline-none focus:border-red-500" />
                <label>Team</label> {error.team && <span className="text-base text-[#f00a31]">{error.team}</span>}
                <input value={form.team} type="text" onChange={handleChange} name="team" className="p-2 mb-2 text-base border border-red-400 h-10 hover:border-2  hover:ease-in-out hover:delay-200 focus:outline-none focus:border-red-500" /><br />
                <div className="flex flex-row gap-3">
                    <input type="submit" value={regMutation.isPending ? "Submitting..." : "Submit"} disabled={regMutation.isPending} className="py-2 px-2 w-1/2 mb-3 rounded-[7px] shadow-lg text-lg font-medium bg-red-500 border border-[#ffe8ec] hover:font-bold" />
                    <button type="button" onClick={() => setForm({ fullname: "", email: "", password: "", team: "" })} className="py-2 px-2 w-1/2 mb-3 rounded-[7px] shadow-lg text-lg font-medium bg-red-500 border border-[#ffe8ec] hover:font-bold">
                        Clear
                    </button>
                </div>
            </form>
        </div>
    )
}
export default FormSign