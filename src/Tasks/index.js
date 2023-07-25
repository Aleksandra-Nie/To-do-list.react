import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (

    <ul className="section__list">
        {tasks.map(task => (
            <li className={`list__item${task.done && hideDone ? " list__item--hidden" : ""}`} key={task.id}
            >
                <button className="list__buttonTask list__buttonTask--toggleDone">
                    {task.done ? " ✓ " : ""}
                </button>
                <span className={`list__content ${task.done ? "list__content--done" : ""}`}>
                    {task.content}
                </span>
                <button onClick={() => removeTask(task.id)} className="list__buttonTask list__buttonTask--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);


export default Tasks;