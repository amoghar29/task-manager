import StarRating from "./StarRating";

const GoalCard = ({ goal }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={goal.completed}
            className="mt-1 form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <div>
            <h3 className={`font-semibold ${goal.completed ? "line-through" : ""}`}>
              {goal.description}
            </h3>
            <p className="text-sm text-gray-400">Category: {goal.category}</p>
            <p className="text-sm text-gray-400">Deadline: {goal.deadline}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <StarRating rating={goal.rating} />
          <div className="space-x-2">
            <button className="text-blue-400 hover:text-blue-300">Edit</button>
            <button className="text-red-400 hover:text-red-300">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;