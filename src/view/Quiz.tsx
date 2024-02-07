import React from 'react';

import Quiz from "../components/app-components/Quiz/AppQuiz.tsx"
import ErrorBoundary from '../components/shared/Errors/ErrorBoundary.js';

const Users: React.FC = () => {

    return (
        <div style={{ padding: "8px" }}>
            <ErrorBoundary>
                <Quiz />
            </ErrorBoundary>
        </div>
    );
}

export default Users;
