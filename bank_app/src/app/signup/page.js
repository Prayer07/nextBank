'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function Signup(){
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        phone: "",
        password: ""
    })
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch("/api/auth/signup",{
            method: 'POST',
            body: JSON.stringify(form)
        })

        if(res.ok) router.push('/login')
    }

    return(
    <form onSubmit={handleSubmit}>
        <input placeholder="First Name" onChange={e => setForm({ ...form, fname: e.target.value })} />
        <input placeholder="Last Name" onChange={e => setForm({ ...form, lname: e.target.value })} />
        <input placeholder="Phone" onChange={e => setForm({ ...form, phone: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button>Signup</button>
    </form>
    )
}