function StudentCard(props) { 
    const nameStyle = { 
        color: "blue" 
    }; 
    const cgpaStyle = { 
        color: "green" 
    }; 
    const attendanceStyle = { 
        color: "orange" 
    }; 
    return ( 
        <div className="card"> 
            <img src={props.photo} 
alt="student" className="photo"/> 
            <h2 style={nameStyle}> 
                {props.name} 
            </h2> 
 
            <p> 
                Register No : {props.regNo} 
            </p> 
            <p> 
                Department : 
{props.department} 
           </p> 
            <p> 
                Year : {props.year} 
            </p> 
            <p style={cgpaStyle}> 
                CGPA : {props.cgpa} 
            </p> 
            <p style={attendanceStyle}> 
                Attendance : 
{props.attendance}% 
            </p> 
            <h3>Attendance Status</h3> 
            { 
                props.attendance >= 75 ? 
                <p>Eligible for Semester 
Exam</p> 
                : 
                <p>Not Eligible</p> 
            } 
            <h3>Placement Status</h3> 
            { 
                props.cgpa >= 8 ? 
                <p>Eligible</p> 
               : 
                <p>Need Improvement</p> 
            } 
        </div> 
    ); 
} 
export default StudentCard; 