// import logo from './logo.svg';
import './App.css';
import Badge from './components/Badge';
import BadgeWithClass from './components/BadgeWithClass';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div>
      <Badge caption="Inbox"></Badge>
      <hr/>
      <BadgeWithClass caption="Sent"></BadgeWithClass>
      <hr/>
      <Dropdown></Dropdown>
    </div>
  );
}

export default App;
