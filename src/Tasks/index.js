import { StyledButtonTask, StyledItem, StyledList, StyledContent } from "./styled";


const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (

    <StyledList>
        {tasks.map(task => (
            <StyledItem
                $hidden={task.done && hideDone}
                key={task.id}
            >
                <StyledButtonTask
                    $toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? " ✓ " : ""}
                </StyledButtonTask>
                <StyledContent
                    $done={task.done}
                >
                    {task.content}
                </StyledContent>
                <StyledButtonTask
                    $remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </StyledButtonTask>
            </StyledItem>
        ))}
    </StyledList >
);


export default Tasks;