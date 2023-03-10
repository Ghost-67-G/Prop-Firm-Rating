import React, { useEffect } from "react";
import "../../assets/css/login.css"
import authLayout from "../../hoc/authLayout";
import {useForm} from 'react-hook-form'

const Login =({loginAdmin})=>{
    const form = useForm()
        return <>
            <form onSubmit={form.handleSubmit(loginAdmin)} className="login-form">
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    <input type="email" name="email" {...form.register("admin_email")} className="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    <input type="password" name="password" {...form.register("admin_password")} className="form-control form-control-lg"
                    placeholder="Enter password" />
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                    <button className="btn btn-primary btn-lg">Login</button>
                </div>
            </form>
        </>
}

export default authLayout(Login);