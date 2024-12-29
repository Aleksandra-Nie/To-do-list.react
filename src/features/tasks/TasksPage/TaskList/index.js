import { selectTaskByQuery, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { StyledButtonTask, StyledItem, StyledList, StyledContent, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toTask } from "../../../../routes";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {

    const query = useQueryParameter(searchQueryParamName)
    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(task => (
                <StyledItem
                    $hidden={task.done && hideDone}
                    key={task.id}
                >
                    <StyledButtonTask
                        $toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? " ✓ " : ""}
                    </StyledButtonTask>
                    <StyledContent
                        $done={task.done}
                    >
                        <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
                    </StyledContent>
                    <StyledButtonTask
                        $remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </StyledButtonTask>
                </StyledItem>
            ))}
        </StyledList >
    );
};

export default TaskList;