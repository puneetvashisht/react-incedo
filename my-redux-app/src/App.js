import logo from './logo.svg';
import './App.css';
import ViewCourses from './components/ViewCourses';
import DisplayCourses from './components/DisplayCourses';
import AddCourse from './components/AddCourse';

function App() {
  return (
    <>

      <AddCourse></AddCourse>
      <hr/>
      <ViewCourses></ViewCourses>
      <hr/>
      <DisplayCourses></DisplayCourses>

    </>
  );
}

export default App;
