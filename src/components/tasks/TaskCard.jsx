import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/features/tasks/tasksSlice';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  console.log(task)

  let updatedStatus;

  if (task.status === "pending") {
    updatedStatus = "running"
  }
  else if (task.status === "running") {
    updatedStatus = "done"
  }
  else {
    updatedStatus = "archive"
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1 className={`text-lg font-semibold mb-3 ${
        task.payload.priority === "high" ? "text-red-500" : " "}
        ${
          task.payload.priority === "medium" ? "text-yellow-500" : " "}
          ${
            task.payload.priority === "low" ? "text-green-500" : " "}
        `}>
        {task?.payload.name}</h1>
      <p className="mb-3">{task?.payload.description}</p>
      <p className="text-sm">Assigned to - {task?.payload.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.payload.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({ id: task.id, status: updatedStatus }))}
            title='Update Status'>
            <ArrowRightIcon className='h-5 w-5 text-primary' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
