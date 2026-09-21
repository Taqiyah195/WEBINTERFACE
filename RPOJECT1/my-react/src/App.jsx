import Header from "./header.jsx"; 
import StudentCard from 
"./studentCard.jsx"; 
import SubjectList from 
"./subjectList.jsx"; 
import Footer from "./footer.jsx"; 
import StudentID 
from"./studentID.jpeg"; 
import "./App.css"; 
function App() { 
  const semester = 5; 
  const year = "III"; 
  const student = { 
    name: "TAQIYAH", 
    regNo: "70", 
    department: "CSE", 
    year: "II", 
    cgpa: 8.5, 
    attendance: 91, 
    photo:StudentID 
  }; 
 
  const subjects = ["React", "Java", 
"Python", "SQL", "DBMS"]; 
  return ( 
    <> 
      <Header /> 
      <StudentCard 
        name={student.name} 
        regNo={student.regNo} 
        department={student.department} 
        year={student.year} 
        cgpa={student.cgpa} 
        attendance={student.attendance} 
        photo={student.photo} 
      /> 
      <SubjectList 
        subjects={subjects} 
        semester={semester} 
        year={year} 
      /> 
      <Footer /> 
 
    </> 
  ); 
} 
export default App;