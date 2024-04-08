import { message } from "antd";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [state, setState] = useState({ firstName: "", lastName: "", email: "", password: "", imageURL: "", userName: "", gender: "", birthDate: "" });
    const navigate = useNavigate();

    const handleChange = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }));

    function Submit(e) {
        e.preventDefault();
        let { firstName, lastName, email, password, birthDate, imageURL, userName, gender } = state;
        // firstName = firstName.trim();
        // lastName = lastName.trim();
        // userName = userName.trim();
        // gender = gender.trim();
        // email = email.trim();
        // password = password.trim();
        // confirmPassword = confirmPassword.trim();
        // if (firstName.length < 3) {
        //     return message.error("Enter first name properly");
        // }
        // if (lastName.length < 3) return message.error("Enter last name properly");
        // if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        //     return message.error("Enter a valid email address");
        // }
        setState(firstName, lastName, email, password, birthDate, imageURL, userName, gender);
        console.log(state);
        axios
            .post("http://localhost:8000/user/register", JSON.stringify(state), { headers: { "Content-Type": "application/json" } })
            .then((res) => {
                console.log(res);
                message.success("User created Successfully");
                navigate("/auth/login");
            })
            .catch((error) => {
                console.log(error);
            });

        // const users = { message: "From database" };
        // let user = users.find((user) => user.email === email);
        // if (!user) {
        //     if (password !== confirmPassword) {
        //         return message.error("Password didn't matched. try again");
        //     }
        //     const newUser = { firstName, lastName, email, password, userName, gender, birthDate, imageURL };
        //     console.log(newUser);
        //     setTimeout(() => {
        //         navigate("/auth/login");
        //     }, [1000]);
        // } else {
        //     message.error("This user already exits!");
        // }
    }

    return (
        <>
            <div className="mt-16 w-[500px] mx-auto">
                <div className="py-8">
                    <h1 className="text-[34px] tracking-tight font-medium text-center leading-[3rem]"> Create Your Apple ID</h1>
                    <p className="text-[17px] tracking-normal text-center"> One Apple ID is all you need to access all Apple Services.</p>
                </div>
                <div className="w-[480px] mx-auto">
                    <form className="gap-y-4">
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:pt-5 focus:pb-1"
                                    id="firstName"
                                    name="firstName"
                                    onChange={handleChange}
                                />
                                <label
                                    className="after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none absolute left-3 top-0 mb-0 origin-[0_0] 
                                truncate pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                            </div>
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:pt-5 focus:pb-1"
                                    id="lastName"
                                />
                                <label
                                    className="after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none absolute left-3 top-0 mb-0 origin-[0_0] 
                                truncate pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </label>
                            </div>
                        </div>

                        <div className="relative mb-6">
                            <input
                                type="text"
                                name="birthDate"
                                onChange={handleChange}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                                className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:pt-5 focus:pb-1"
                                id="birthday"
                            />
                            <label
                                className="after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none absolute left-3 top-0 mb-0 origin-[0_0] 
                                truncate pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                htmlFor="birthday"
                            >
                                Birthday
                            </label>
                        </div>
                        <div className="relative mb-6">
                            <input
                                type="text"
                                name="userName"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:pt-5 focus:pb-1"
                                id="userName"
                            />
                            <label
                                className="after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none absolute left-3 top-0 mb-0 origin-[0_0] 
                                truncate pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                htmlFor="userName"
                            >
                                User Name
                            </label>
                        </div>
                        <div className="relative mb-6">
                            <input
                                type="email"
                                className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:pt-5 focus:pb-1"
                                id="email"
                                name="email"
                                onChange={handleChange}
                            />
                            <label
                                className="after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none absolute left-3 top-0 mb-0 origin-[0_0] 
                                truncate pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                htmlFor="email"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="relative mb-6">
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:pt-5 focus:pb-1"
                                id="password"
                            />
                            <label
                                className="after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none absolute left-3 top-0 mb-0 origin-[0_0] 
                                truncate pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                htmlFor="password"
                            >
                                Password
                            </label>
                        </div>
                        {/* <div className="relative mb-6">
                            <input
                                type="password"
                                name="confirmPassword"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:pt-5 focus:pb-1"
                                id="confirmPassword"
                            />
                            <label
                                className="after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none absolute left-3 top-0 mb-0 origin-[0_0] 
                                truncate pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                htmlFor="confirmPassword"
                            >
                                Confirm Password
                            </label>
                        </div> */}
                        <div className="relative mb-3">
                            <input
                                type="text"
                                name="gender"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:pt-5 focus:pb-1"
                                id="gender"
                            />
                            <label
                                className="after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none absolute left-3 top-0 mb-0 origin-[0_0] 
                                truncate pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                htmlFor="gender"
                            >
                                Gender
                            </label>
                        </div>
                        <div className="relative mb-6">
                            <label className="mb-2" htmlFor="image">
                                Select Image
                            </label>
                            <input
                                type="file"
                                name="ImageURL"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                id="image"
                            />
                        </div>

                        <div>
                            <button
                                type="button"
                                className="inline-block w-full rounded bg-blue-500 px-7 pb-2 pt-3 text-sm font-medium uppercase  text-white 
                                shadow-blue-300 transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-2 
                                focus:bg-blue-600 focus:outline-none focus:ring-0"
                                onClick={Submit}
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-2">
                        <p className="my-8">
                            Already have Apple ID ?{" "}
                            <span className="text-[#2997ff]">
                                <span className="hover:underline">
                                    <Link to="/auth/login">Login now.</Link>
                                </span>{" "}
                                &#8599;
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
