import React, {useState} from 'react'
import AddCourse from './AddCourse'
import Card from './Card'

export default function ViewCourses() {

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')

    const [courses, setCourses] = useState([
        {id: 23, title:'Angular', summary:'Angular is from google.. its a framework'},
        {id: 13, title:'React', summary:'React is from facebook.. its a library'},
        {id: 3, title:'Ember', summary:'Ember is open-source.. its a framework'}
    ])

    const handleTitleChange = ($event) => {
        // console.log($event.target.value)
        // if($event.target.value.length< 6){

        // }
        setTitle($event.target.value)

    }
    const handleSummaryChange = ($event) => {
        // console.log($event.target.value)
        setSummary($event.target.value)
    }


    const addCourse = (index)=>{
        

        var newCourses = [ ...courses ]
        newCourses.push({title, summary})
        console.log(newCourses);
        setCourses(newCourses);
        setTitle('') 
        setSummary('')
    }
    const handleDelete = (index)=>{
        console.log('handle delete  in parent', index)

        var newCourses = [ ...courses ]
        newCourses.splice(index, 1);
        console.log(newCourses);
        setCourses(newCourses);
    }

    let listCourses = courses.map((course, i)=>{
        return <Card key={course.id} idx={i} title={course.title} summary={course.summary} courseDeleted={handleDelete}></Card>
    })


    return (
        <div className="container ">
            <div className="row">

                
                {/* <h2>Add Course</h2>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Title</span>
                <input type="text" class="form-control" onChange={handleTitleChange} value={title} placeholder="Enter title" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Summary</span>
                <input type="text" class="form-control"  onChange={handleSummaryChange} value={summary} placeholder="Enter summary" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                <button onClick={addCourse} className="btn btn-primary">Add Course</button>
                </div> */}
            </div>
            <div className="row">
            <h2>View Courses</h2>
                {listCourses}
            </div>
           
        </div>
    )
}
