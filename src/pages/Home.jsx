import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear(); // Clear local storage
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={handleLogout} className="logout-button">
                Log out
            </button>
        </div>
    );
}

export default Home;
