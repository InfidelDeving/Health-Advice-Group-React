import {Routes, Route} from "react-router"
import Home from "./pages/Home/Home";

// REACT ROUTER IS A LIBRARY TO SIMULATE SWITCHING PAGES BY CHANGING THE CONTENT ON THE PAGE
// PAGES FOUND IN /src/pages


export default function Routing() {
    return (
        <Routes>
            <Route index element={<Home/>} />
        </Routes>
    )
}