import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
function Home() {
  return (
    <div className="page">
      <h1>🎓 Student Report Card</h1>

      <h2>Welcome to Student Result System</h2>

      <p>
        View semester-wise marks, student details and final results.
      </p>
    </div>
  );
}
function Sem1() {
  const subjects = [
    ["Java", 85],
    ["Designs for Developers", 88],
    ["Engineering Physics", 82],
    ["Engineering Chemistry", 86],
    ["Technical English", 90]
  ];
  return (
    <div className="page">
      <h1>📘 Semester 1</h1>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Sem2() {
  const subjects = [
    ["OOPS", 89],
    ["Python", 92],
    ["Web Development", 87],
    ["Technical English", 91]
  ];

  return (
    <div className="page">
      <h1>📗 Semester 2</h1>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Sem3() {
  const subjects = [
    ["DBMS", 90],
    ["Data Science", 88],
    ["Web Interface", 92],
    ["Data Structure", 86]
  ];

  return (
    <div className="page">
      <h1>📙 Semester 3</h1>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function About() {
  return (
    <div className="page">
      <h1>👩‍🎓 About Student</h1>

      <p><b>Name:</b> Taqiyah S</p>
      <p><b>Register No:</b> 101</p>
      <p><b>Department:</b> Computer Science Engineering</p>
      <p><b>College:</b> PDKVCET</p>
    </div>
  );
}
function Final() {

  const sem1 = [85, 88, 82, 86, 90];
  const sem2 = [89, 92, 87, 91];
  const sem3 = [90, 88, 92, 86];

  function calculateAverage(marks) {
    const total = marks.reduce(
      (sum, mark) => sum + mark,
      0
    );

    return total / marks.length;
  }

  const sem1Average = calculateAverage(sem1);
  const sem2Average = calculateAverage(sem2);
  const sem3Average = calculateAverage(sem3);
  const overallAverage =
    (sem1Average + sem2Average + sem3Average) / 3;
  const cgpa = overallAverage / 10;

  return (
    <div className="page">

      <h1>🏆 Final Result</h1>

      <h2>Student: Taqiyah S</h2>

      <div className="result-box">

        <h3>Semester 1 Average</h3>
        <p>{sem1Average.toFixed(2)}%</p>

        <h3>Semester 2 Average</h3>
        <p>{sem2Average.toFixed(2)}%</p>

        <h3>Semester 3 Average</h3>
        <p>{sem3Average.toFixed(2)}%</p>

        <hr />

        <h2>
          Overall Average: {overallAverage.toFixed(2)}%
        </h2>

        <h1 className="cgpa">
          CGPA: {cgpa.toFixed(2)}
        </h1>

        <h2 className="pass">
          Overall Result: PASS ✅
        </h2>

      </div>
    </div>
  );
}
function ReportCard() {

  return (
    <BrowserRouter>

      <nav>

        <h2>🎓 Report Card</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/sem1">Sem 1</Link>
          <Link to="/sem2">Sem 2</Link>
          <Link to="/sem3">Sem 3</Link>
          <Link to="/about">About</Link>
          <Link to="/final">Final</Link>
        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/sem1"
          element={<Sem1 />}
        />

        <Route
          path="/sem2"
          element={<Sem2 />}
        />

        <Route
          path="/sem3"
          element={<Sem3 />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/final"
          element={<Final />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default ReportCard;