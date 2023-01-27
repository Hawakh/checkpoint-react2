import logo from './logo.svg';
import './App.css';
import FullName from './components/Profile/FullName';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import Address from './components/Profile/Address';



function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName/>
      <Address/>
     
    </div>
  )
}

export default App;
