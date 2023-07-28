import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllTasksCompleted }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="buttons__button"
                    onClick={markAllTasksCompleted}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
                <button type="reset" className="buttons__button buttons__button--reset">Usuń wszystkie</button>
            </>
        )}
    </div>
);


export default Buttons;