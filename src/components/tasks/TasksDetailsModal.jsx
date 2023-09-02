import { useSelector } from 'react-redux';
import Modal from '../ui/Modal';

const TasksDetailsModal = ({ isOpen, setIsOpen, id }) => {

    const {tasks} = useSelector((state)=>state.tasksSlice);
    const task = tasks.find((item) => item.id === id);
    console.log(task)


    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.payload.name}>
            {task?.payload.description}
        </Modal>
    );
};

export default TasksDetailsModal;