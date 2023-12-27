import Login from "./Login";
import Profile from "./Profile";
import UserContextProvider from "./context/UserContextprovider";



function App() {
  return (
    <UserContextProvider>
       <Login/>
       <Profile/>
    </UserContextProvider>
      
     
      
    
  );
}

export default App;
