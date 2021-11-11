import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function ViewCourses(props) {


    // const [courses, setCourses] = useState([
    //     {id: 23, title:'Angular', summary:'Angular is from google.. its a framework'},
    //     {id: 13, title:'React', summary:'React is from facebook.. its a library'},
    //     {id: 3, title:'Ember', summary:'Ember is open-source.. its a framework'}
    // ])


 


    const handleDelete = (index)=>{
        console.log('handle delete  in parent', index)

        // var newCourses = [ ...courses ]
        // // newCourses.splice(index, 1);
        // let courseDeleted = newCourses.splice(index, 1);
        // console.log(newCourses);
        // setCourses(newCourses);
    }

    let listCourses = props.courses.map((course, i)=>{
        return <Card key={course.id} idx={i} title={course.title} summary={course.summary} courseDeleted={handleDelete}></Card>
    })


    return (
        <div className="container ">
     
            <div className="row">
            <h2>View Courses</h2>
                {listCourses}
            </div>
           
        </div>
    )
}


// const mapDispatchToProps = (dispatch) => {
//     // console.log(state);
// }

const mapStateToProps = (state) => {
    console.log(state);

    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(ViewCourses) ;
