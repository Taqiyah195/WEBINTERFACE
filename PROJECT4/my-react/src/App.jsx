
import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { name: "Aisha", status: "Absent" },
    { name: "Rahul", status: "Absent" },
    { name: "Meena", status: "Absent" }
  ]);

  const markAttendance = (index, status) => {
    const updated = [...students];
    updated[index].status = status;
    setStudents(updated);
  };

  return (
    <div className="app">
      <h1>Attendance Tracker</h1>

      {students.map((student, index) => (
        <div className="student" key={index}>
          <span>{student.name}</span>

          <button onClick={() => markAttendance(index, "Present")}>
            Present
          </button>

          <button onClick={() => markAttendance(index, "Absent")}>
            Absent
          </button>

          <b>{student.status}</b>
        </div>
      ))}
    </div>
  );
}

export default App;

