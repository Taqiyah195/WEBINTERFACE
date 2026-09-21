function SubjectList(props) { 
    return ( 
        <div className="subjects"> 
            <h2>Subject List</h2> 
            <ul> 
                { 
                    props.subjects.map((subject,index)=> 
                    <li key={index}> 
                        {subject} 
                    </li> 
                    ) 
                } 
            </ul> 
            <h3> 
                Current Semester : 
{props.semester} 
            </h3> 
 
            <h3> 
                Current Year : {props.year} 
            </h3> 
 
            <h3> 
                Total Subjects : 
{props.subjects.length} 
            </h3> 
        </div> 
    ); 
} 
export default SubjectList;