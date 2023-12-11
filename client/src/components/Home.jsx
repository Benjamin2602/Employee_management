const Home = () => {
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
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">Department</label>
        <input
          type="text"
          id="department"
          placeholder="Enter your department"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">Salary</label>
        <input
          type="number"
          id="salary"
          placeholder="Enter your salary"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">designation</label>
        <input
          type="text"
          id="age"
          placeholder="Enter your designation"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">dob</label>
        <input
          type="text"
          id="dob"
          placeholder="Enter your dob"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <label className="text-lg font-bold">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          className="h-9 w-1/3 border border-gray-400 rounded-md"
        />
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-3">
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default Home;
