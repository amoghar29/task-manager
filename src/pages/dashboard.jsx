import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext/authContext";
import GoalForm from "../components/goalForm";
import GoalList from "../components/goalList";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };
  const goals =[]
  // Example goals data
  // const goals = [
  //   {
  //     id: 1,
  //     description: "Run 5km",
  //     category: "Health",
  //     deadline: "2023-11-15",
  //     completed: true,
  //     rating: 4,
  //   },
  //   {
  //     id: 2,
  //     description: "Complete React Project",
  //     category: "Work",
  //     deadline: "2023-12-31",
  //     completed: false,
  //     rating: 0,
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Goal Tracker</h1>
          <div className="flex space-x-4">
            <Link
              to="/profile"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              My Profile
            </Link>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <GoalForm />
        <GoalList goals={goals} />
      </div>
    </div>
  );
};

export default Dashboard;