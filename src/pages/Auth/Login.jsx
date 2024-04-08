import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { useBag } from "../../components/BagProvider";

export default function Login() {
    const { userID, setUserId, setUserToken } = useBag();
    const navigate = useNavigate();

    const [state, setState] = useState({ email: "", password: "" });

    const handleChange = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }));

    function Submit(e) {
        e.preventDefault();
        let { email, password } = state;
        email = email.trim();
        password = password.trim();
        console.log(email, password);

        // console.log(state);
        axios
            .post("http://localhost:8000/user/login", JSON.stringify({ email: email, password: password }), { headers: { "Content-Type": "application/json" } })
            .then((res) => {
                const tokenData = jwtDecode(res.data.token);
                console.log({ res: res, token: tokenData });
                setUserId(tokenData.id);
                setUserToken(res.data.token);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });

        // const users = { message: "User collection from db" };
    }
    return (
        <>
            <div className="mt-16  max-w-[980px] mx-auto">
                <div className="pt-6 pb-20">
                    <h1 className="text-[40px] tracking-tight font-semibold">Sing In for faster Checkouts</h1>
                </div>
                <div className="mb-6">
                    <h2 class="text-2xl text-center font-semibold tracking-tight md:text-2xl">Sign in to Apple Store</h2>
                </div>
                <div className="w-[480px] mx-auto">
                    <form className="space-y-4">
                        <div className="mb-6">
                            <label
                                className=" after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none ms-3 pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                htmlFor="email"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                className="block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                id="email"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="after:content-['*'] after:ml-1 after:text-xl after:text-red-600 pointer-events-none ms-3 pt-3 text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.85] peer-focus:text-blue-500 peer-focus:after:hidden "
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                className="peer block w-full rounded-md border bg-white px-3 py-3 leading-[2.15] border-slate-300
                                transition-all duration-200 ease-linear
                                 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                                id="password"
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
                                Login
                            </button>
                        </div>
                        <div className="mb-[0.125rem] pt-12 block min-h-[1.5rem] text-center">
                            <input
                                className="h-[1.125rem] w-[1.125rem] 
                                rounded-[0.25rem] border-[0.125rem] border-solid border-gray-400 outline-none before:opacity-0
                                 checked:border-blue-600 checked:bg-blue-500 
                                checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                type="checkbox"
                                value=""
                                id="RememberMe"
                            />
                            <label className="inline-block ps-[0.25rem] hover:cursor-pointer" htmlFor="RememberMe">
                                Remember me
                            </label>
                        </div>
                    </form>
                    <div className="text-center mt-2">
                        <p className="">
                            Don't have Apple ID ?{" "}
                            <span className="text-[#2997ff]">
                                <span className="hover:underline">
                                    <Link to="/auth/register">Create yours now.</Link>
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
