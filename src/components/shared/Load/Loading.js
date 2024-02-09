import React from 'react';

export const LoadingApp = (props, Component) => {
    class newComponent extends React.Component{
        
        componentDidMount() {
            console.log("Did Mount Component");
        }
        
        componentWillUnmount() {
            console.log("Will componentWillUnmount Component");
        }
        
        render() {
            return <Component {...this.props}></Component>
        }
    }

    return newComponent
}