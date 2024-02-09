import React from "react";


class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    }

    componentDidCatch(error ,errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        })
    }

    render(){
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Предохранитель работает. Что-то пошло не так</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <hr />
                        {this.state.errorInfo?.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children
    }
}

export default ErrorBoundary