export const ADD_COURSE = 'ADD_COURSE'
export const DELETE_COURSE = 'DELETE_COURSE'
export const FETCH_COURSES = 'FETCH_COURSES'


export const fetchCourses = () => {
    return (dispatch) => {
        fetch('http://localhost:8000/courses/')
          .then(response => response.json()) 
          .then(json => {
              console.log(json);
              dispatch({type: FETCH_COURSES, payload: json});
          })
          .catch(err => console.log(err));

    }
}

export const addCourse = (course) => {

    // delayed dispatch available through thunk
    return (dispatch) => {
        fetch('http://localhost:8000/courses/', {
            method: "POST",
            body: JSON.stringify(course),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          .then(response => response.json()) 
          .then(json => {
              console.log(json);
              dispatch({type: ADD_COURSE, payload: course});
          })
          .catch(err => console.log(err));

    }

    // return {type: ADD_COURSE, payload: course};
}
export const deleteCourse = (id) => {

    return (dispatch) => {
        fetch('http://localhost:8000/courses/' + id, {
        method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            // this.setState({courses: data});
            dispatch({type: DELETE_COURSE, payload: {id}});
        })
        .catch(err=>console.log(err))
    }


    
}

