import Navigation from "./navigation";
import User from "./user";

function Header() {
    return (
        <header>
            <Navigation />
            <h1>team awesome</h1>
            <User />
        </header>
    )
}

export default Header;