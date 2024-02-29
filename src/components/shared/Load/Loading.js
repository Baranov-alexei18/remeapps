import React, { useEffect } from 'react';

export const LoadingApp = (props, Components) => {
    
    const NewComp = () => {
        useEffect(() => {
            console.log("MOUNT COMPONENT")
            return ()=>console.log("UNMOUNT COMPONENT")
        }, [])

        return <Components {...props}></Components>
    }

    return NewComp
}