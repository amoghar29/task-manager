import GoalCard from "./goalCard";

const GoalList = ({ goals }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Your Goals</h2>
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
};

export default GoalList;