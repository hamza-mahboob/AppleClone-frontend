import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import Mac from "./Mac";
import Ipad from "./Ipad";
import Iphone from "./Iphone";
import Watch from "./Watch";
import Accessories from "./Accessories";
import Suppoert from "./Suppoert";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function index() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="store" element={<Store />} />
                <Route path="mac" element={<Mac />} />
                <Route path="ipad" element={<Ipad />} />
                <Route path="iphone" element={<Iphone />} />
                <Route path="watch" element={<Watch />} />
                <Route path="accessories" element={<Accessories />} />
                <Route path="support" element={<Suppoert />} />
                <Route path="bag" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="*" element={<>404 Page not Found</>} />
            </Routes>
        </>
    );
}
