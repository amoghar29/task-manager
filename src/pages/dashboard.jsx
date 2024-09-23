import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext/authContext";
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Goal Tracker</h1>
            <div className="flex space-x-4">
              <Link
                to="/profile" // Replace 'user' with the actual username or user ID
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                My Profile
              </Link>
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                onClick={handleLogin}
              >
                Logout
              </button>
            </div>
          </div>

          <div className="min-h-screen bg-gray-900 text-gray-100 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-8">Goal Tracker</h1>

              {/* Add New Goal Form */}
              <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Add New Goal</h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="goal"
                      className="block text-sm font-medium mb-1"
                    >
                      Goal Description
                    </label>
                    <input
                      type="text"
                      id="goal"
                      className="w-full bg-gray-700 rounded-md border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium mb-1"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        className="w-full bg-gray-700 rounded-md border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      >
                        <option>Personal</option>
                        <option>Work</option>
                        <option>Health</option>
                        <option>Finance</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="deadline"
                        className="block text-sm font-medium mb-1"
                      >
                        Deadline
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        className="w-full bg-gray-700 rounded-md border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                    Add Goal
                  </button>
                </div>
              </div>

              {/* Goals List */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Your Goals</h2>

                {/* Example Goal Items */}
                <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        className="mt-1 form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <div>
                        <h3 className="font-semibold">
                          Complete React Project
                        </h3>
                        <p className="text-sm text-gray-400">Category: Work</p>
                        <p className="text-sm text-gray-400">
                          Deadline: 2023-12-31
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <StarRating rating={0} />
                      <div className="space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">
                          Edit
                        </button>
                        <button className="text-red-400 hover:text-red-300">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked
                        className="mt-1 form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <div>
                        <h3 className="font-semibold line-through">Run 5km</h3>
                        <p className="text-sm text-gray-400">
                          Category: Health
                        </p>
                        <p className="text-sm text-gray-400">
                          Deadline: 2023-11-15
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <StarRating rating={4} />
                      <div className="space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">
                          Edit
                        </button>
                        <button className="text-red-400 hover:text-red-300">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
