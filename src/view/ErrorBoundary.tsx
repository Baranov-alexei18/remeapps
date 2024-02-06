import React from 'react';
import { useNavigate } from 'react-router-dom';


const ErrorBoundary: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{ padding: "12px", display: 'flex', justifyContent: "center" }}>
            <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column', backgroundColor: 'white', borderRadius: '20px', width: '700px', height: '500px', color: 'black' }}>
                <h2>Страница не найдена</h2>
                <img src="https://amiel.club/uploads/posts/2022-03/1647558526_12-amiel-club-p-grustnie-multyashnie-kartinki-13.png"
                    alt="not found"
                    style={{ width: "300px", margin: "0 auto" }}
                />
                <button
                    style={{ backgroundColor: '#6FC171', height: '40px', maxWidth: "200px", borderRadius: '20px', color: 'black', margin: "20px" }}
                    onClick={() => navigate("/")}
                >
                    На главную страницу
                </button>
            </div>
        </div>
    );
}

export default ErrorBoundary;