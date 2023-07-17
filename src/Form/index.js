
import "./style.css"

const Form = () => (

    <form id="myForm" className="form">
        <input className="form__input" type="text" name="task" placeholder="Co jest do zrobienia?" autoFocus />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;