import './App.css';
import {useState} from "react";



function App() {
    const [year, setYear] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        fetch(`http://localhost:3000/date?year=${year}`)
            .then(res => res.json())
            .then(date => console.log(date))
    }
    return (
        <>
        <div className="form-container">

            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form__title">Podaj datę</h1>
                <select value={year} onChange={e => setYear(e.target.value)}>
                    <option value={2021}>2021</option>
                    <option value={1914}>1914</option>
                    <option value={2022}>2022</option>

                </select>
                <input type="text" className="form__input" placeholder="Podaj rok" required  />
                <input type="text" className="form__input" placeholder="Podaj miesiąc" required />
                <input type="submit" className="form__button" value="Znajdź" />
            </form>
        </div>
            <div className="result"/>

            <footer className="footer">
                <p className="footer_p">Informacje zebrane na podstawie <a href="https://pl.wikipedia.org">pl.wikipedia.org</a></p></footer>
            </>
);
}

export default App;
