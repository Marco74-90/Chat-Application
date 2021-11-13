import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import Login from './components/Login'
import './App.css'

const projectID = "50311c58-c288-4b6d-acb4-c9c7db2e88b6"

function App() {
    if(!localStorage.getItem('username')) return <Login />
    
  return (
    <div className="App">
      <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} />
    </div>
  );
}

export default App;
