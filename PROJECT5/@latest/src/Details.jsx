import { useState } from "react";
import "./App.css";

function Details() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    aadhaarName: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    gender: "",
    department: "",
    qualification: "",
    college: "",
    city: "",
    state: "",
    pincode: "",
    permanentAddress: "",
    currentAddress: "",
    guardianName: "",
    guardianPhone: "",
    photo: null
  });

  const [errors, setErrors] = useState({});
  const [sameAddress, setSameAddress] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function handleAddress(e) {
    const checked = e.target.checked;
    setSameAddress(checked);

    setForm({
      ...form,
      currentAddress: checked ? form.permanentAddress : ""
    });
  }

  function handlePhoto(e) {
    const file = e.target.files[0];

    if (file && file.size > 2 * 1024 * 1024) {
      setErrors({ photo: "Photo must be below 2 MB" });
      setForm({ ...form, photo: null });
    } else {
      setErrors({});
      setForm({ ...form, photo: file });
    }
  }

  function validate() {
    let newErrors = {};

    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must contain exactly 10 digits";
    }

    if (!/^\d{10}$/.test(form.guardianPhone)) {
      newErrors.guardianPhone = "Enter a valid 10-digit number";
    }

    if (form.username !== form.aadhaarName) {
      newErrors.aadhaarName = "Username and Aadhaar name must match";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password must contain 8 characters";
    }

    if (!form.photo) {
      newErrors.photo = "Please upload a photo";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  }

  function clearForm() {
    setForm({
      name: "",
      username: "",
      aadhaarName: "",
      email: "",
      password: "",
      phone: "",
      dob: "",
      gender: "",
      department: "",
      qualification: "",
      college: "",
      city: "",
      state: "",
      pincode: "",
      permanentAddress: "",
      currentAddress: "",
      guardianName: "",
      guardianPhone: "",
      photo: null
    });

    setErrors({});
    setSameAddress(false);
  }

  return (
    <div className="form-container">
      <h1>Student Registration Form</h1>

      <input name="name" placeholder="Full Name" onChange={handleChange} />

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        name="aadhaarName"
        placeholder="Aadhaar Name (Demo)"
        onChange={handleChange}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <input name="dob" type="date" onChange={handleChange} />

      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <input
        name="department"
        placeholder="Department"
        onChange={handleChange}
      />

      <input
        name="qualification"
        placeholder="Qualification"
        onChange={handleChange}
      />

      <input
        name="college"
        placeholder="College Name"
        onChange={handleChange}
      />

      <input name="city" placeholder="City" onChange={handleChange} />

      <input name="state" placeholder="State" onChange={handleChange} />

      <input name="pincode" placeholder="Pincode" onChange={handleChange} />

      <textarea
        name="permanentAddress"
        placeholder="Permanent Address"
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          checked={sameAddress}
          onChange={handleAddress}
        />
        Same as Permanent Address
      </label>

      <textarea
        name="currentAddress"
        placeholder="Current Address"
        value={form.currentAddress}
        onChange={handleChange}
      />

      <input
        name="guardianName"
        placeholder="Guardian Name"
        onChange={handleChange}
      />

      <input
        name="guardianPhone"
        placeholder="Guardian Phone"
        onChange={handleChange}
      />
      {errors.guardianPhone && (
        <p className="error">{errors.guardianPhone}</p>
      )}

      <label>Upload Photo (Maximum 2 MB)</label>

      <input type="file" accept="image/*" onChange={handlePhoto} />

      {errors.photo && <p className="error">{errors.photo}</p>}

      {errors.aadhaarName && (
        <p className="error">{errors.aadhaarName}</p>
      )}

      <button onClick={validate}>Submit</button>
      <button onClick={clearForm}>Clear</button>
    </div>
  );
}

export default Details;