import "./style.css"

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="buttons__button"
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