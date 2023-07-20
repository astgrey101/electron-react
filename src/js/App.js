import React from "react";

export const App = () => {
    return (
        <>
            <h1>Component!!!</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification('Custom message')
            }
            }>Notify</button>
        </>
    )
}