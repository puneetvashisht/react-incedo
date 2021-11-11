const initialState = {
    courses: [
        {title: 'Angular', summary: 'Framework from Google!'},
        {title: 'React', summary: 'Libary from FB!'},
    ]
}

const reducer = (state = initialState, action)=>{
    // state modifications

    switch(action.type){
        //case 'FETCH_COURSES' : return state;

        case 'ADD_COURSE': 
        // modify the courses array to add another course object
        // no mutable changes
        // state.courses.push(action.payload);
        let newCourses =  [...state.courses, action.payload]
        return {courses: newCourses}


        case 'DELETE_COURSE': // immuatable change to courses array
        let remainingCourses = state.courses.filter((course)=> course.title != action.payload.title)
        // console.log('Remaining courses', remainingCourses);
        return {courses: remainingCourses}


        default: return state;
    }
}


export default reducer;
