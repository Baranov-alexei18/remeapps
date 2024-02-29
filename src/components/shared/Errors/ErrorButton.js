import React from "react";


const ErrorButton = () => {
    const [error, setError] = React.useState(false)

    if (error) throw new Error('From ErrorButton');
    
    return <button onClick={() => setError(true)} style={{ backgroundColor: 'red', height: '40px', borderRadius: '16px'}}>Вызови ошибку для проверки предохранителя</button>;
    
}
export default ErrorButton