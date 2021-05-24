import React from "react"
import { ChatEngine } from "react-chat-engine"
import "./scss/app.css"
import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/loginForm"

const App = () => {
    const projectID = process.env.REACT_APP_API_KEY
    if (!localStorage.getItem("username")) {
        return <LoginForm />
    }
    return (
        <div>
            <ChatEngine
                height="100vh"
                // projectID={process.env.REACT_APP_API_KEY}
                projectID={projectID}
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                // userName="AAlves"
                // userSecret="123123"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    )
}

export default App