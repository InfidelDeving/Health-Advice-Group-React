import "./Navbar.css"
import Button from "../Button/Button"

export default function Navbar(){

    return(
        <>
            <header className="navbar">
                <img src="../src/assets/Logo.svg" alt="Logo" />
                {/* Buttons */}
                
                <nav>
                    <Button text="test" />
                    <Button text="test" />
                    <Button text="test" path="/home" />
                </nav>
            </header>
        </>
    )
}   