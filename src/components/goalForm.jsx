
const GoalForm = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Goal</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="goal" className="block text-sm font-medium mb-1">
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
            <label htmlFor="category" className="block text-sm font-medium mb-1">
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
            <label htmlFor="deadline" className="block text-sm font-medium mb-1">
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
  );
};

export default GoalForm;