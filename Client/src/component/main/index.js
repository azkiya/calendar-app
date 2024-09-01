import MyCalendar from "../calendar";
import "./main.css";

const Main = () => {
        const handleLogout = () => {
                localStorage.removeItem("token");
                window.location.reload();
        };

        return (
                <div className="main-container">
                        <nav className="navbar">
                                <h1>Calendar Email</h1>
                                <button className="white-btn" onClick={handleLogout}>
                                        Logout
                                </button>
                        </nav>
                        <MyCalendar />
                </div>
        );
};

export default Main;