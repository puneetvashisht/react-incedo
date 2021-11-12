import logo from './logo.svg';
import './App.css';
import ViewCourses from './components/ViewCourses';
import DisplayCourses from './components/DisplayCourses';
import AddCourse from './components/AddCourse';
import NameForm from './components/NameForm';

function App() {
  return (
    <>
      <NameForm></NameForm>
      <AddCourse></AddCourse>
      <hr/>
      <ViewCourses></ViewCourses>
      <hr/>
      <DisplayCourses></DisplayCourses>

    </>
  );
}

export default App;
