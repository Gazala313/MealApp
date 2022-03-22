import { useState } from "react";
import Header from "./Header";
import Image from "./Image";
import Random from "./Random";

function Meals() {
  const [inputs, setInputs] = useState("");
  const [Loading, setLoading] = useState(false);
  const [results, setResult] = useState([]);
  const [error, setError] = useState("");
  const [randoms, setRandom] = useState([]);
  const [rec, setRes] = useState("");

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      SearchMeal();
    }
  };

  function SearchMeal() {
    setLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputs}`;
    fetch(url)
      .then((res) => res.json())
      .then((respones) => {
        setLoading(false);
        if (respones.meals === null) {
          setError("Receipe not Found");
          setResult("");
          setRes("");
        } else {
          setError("");
          setRes("");
          setResult(respones.meals);
        }

        console.log(respones);
      });
    setRandom("");
  }
  if (Loading) {
    return <h1 style={{ color: "#fff" }}>Loading...</h1>;
  }

  function RandomClick() {
    setRes("");
    setResult("");
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setRandom(response.meals);
        console.log(response);
      });
  }

  return (
    <>
      <Header
        setError={setError}
        setRandom={setRandom}
        setRes={setRes}
        setResult={setResult}
        setInputs={setInputs}
      />
      <div className="Meals">
        <h1 className="header">Meal Finder</h1>
        <form className="search_itm">
          <input
            className="input"
            type="text"
            placeholder="Search for Meal..."
            value={inputs}
            onChange={(e) => {
              setInputs(e.target.value);
            }}
          />
          <button className="btn" onClick={SearchMeal}>
            <i
              class="fa fa-search"
              style={{ backgroundColor: "#fff", fontSize: "23px" }}
            ></i>
          </button>
        </form>

        <button className="btn" onClick={RandomClick}>
          <i
            class="fa fa-random"
            style={{ backgroundColor: "#fff", fontSize: "23px" }}
          ></i>
        </button>

        <div className="search_result">
          {error ? (
            <h4 style={{ color: "red", fontSize: "30px" }}>{error}</h4>
          ) : null}
          {results &&
            results.map((item, index) => (
              <div>
                <Image
                  item={item}
                  key={index}
                  setRes={setRes}
                  randoms={setRandom}
                  results={setResult}
                />
              </div>
            ))}

          {randoms &&
            randoms.map((ele) => (
              <Random
                ele={ele}
                setRes={setRes}
                randoms={setRandom}
                results={setResult}
              />
            ))}
          {rec}
        </div>
      </div>
    </>
  );
}

export default Meals;
