import React, { useState, useEffect, useMemo } from "react";

export default function LoginForm() {

    const [form, setForm] = useState({ username: "", password: "" });
    function handleChange(e){
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const validationErrors = useMemo(()=>{

        const errors = {};

        if(form.username === "")
            {
                errors.username = "Username is required."
            }
        
        if(form.password.length < 6)
            {
                errors.password = "Password length should be 6 or more."
            }

        return errors

    }, [form])

    // function handleUsername(e){
    //     const { value } = e.target;
    //     setForm({ ...form, username: value })
    // }

    // function handlePassword(e){
    //     const { value } = e.target;
    //     setForm({ ...form, password: value })
    // }

    function handleSubmit(e){
        e.preventDefault();
        // Write logic to make API or XHR or Ajax request.

        console.log(form)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <p>
                <label>Username</label>
                <input name="username" onChange={handleChange} />
                { validationErrors.username && <span>{validationErrors.username}</span>}
            </p>
            <p>
                <label>Password</label>
                <input name="password" onChange={handleChange} />
                { validationErrors.password && <span>{validationErrors.password}</span>}
            </p>
            <p>
                <button type="submit">Login</button>
            </p>
            {JSON.stringify(form)}
        </form>
    </div>
}