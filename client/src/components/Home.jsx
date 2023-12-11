import { useState } from "react";
import Axios from "axios";
const Home = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState(0);
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const addEmployee = () => {
    console.log(name);
    if (
      name === "" ||
      department === "" ||
      salary === "" ||
      designation === "" ||
      dob === "" ||
      address === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    Axios.post("http://localhost:3000/create", {
      name: name,
      department: department,
      salary: salary,
      designation: designation,
      dob: dob,
      address: address,
    }).then(() => {
      console.log("successfully added");
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col p-2.5 items-center">
        <label htmlFor="name" className="text-lg font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">Department</label>
        <input
          type="text"
          id="department"
          placeholder="Enter your department"
          onChange={(e) => setDepartment(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">Salary</label>
        <input
          type="number"
          id="salary"
          placeholder="Enter your salary"
          onChange={(e) => setSalary(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">designation</label>
        <input
          type="text"
          id="age"
          placeholder="Enter your designation"
          onChange={(e) => setDesignation(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">dob</label>
        <input
          type="text"
          id="dob"
          placeholder="Enter your dob"
          onChange={(e) => setDob(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          onChange={(e) => setAddress(e.target.value)}
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-3"
          onClick={addEmployee}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default Home;
