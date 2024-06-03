import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useAlert } from 'react-alert';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

import './AddTask.scss';

function AddTask({fetchTasks}) {
    const [task, setTask] = useState('');

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    }

    const handleTaskAddition = async () => {
        try {
           
            if (task.length === 0) {
                return alert.error('A tarefa precisa de uma descrição para ser asicionada.');
            }
            
            
            await axios.post('https://fsc-task-manager-backend-qk5m.onrender.com/tasks', {
                description: task,
                isCompleted:false
            });

            await fetchTasks();
            setTask("");
            await alert.success("A tarefa foi adicionada com sucesso!")
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }

    return (
        <div className="add-task-container">
            <CustomInput label="Adicionar tarefa" value={task} onChange={onChange} onEnterPress={handleTaskAddition}/>
            <CustomButton onClick={handleTaskAddition}><FaPlus size={14} color='white' /></CustomButton>
        </div>
    );
}

export default AddTask;
