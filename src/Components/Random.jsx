function Random(props) {
  return (
    <div className="itm1">
      <img className="image" src={props.ele.strMealThumb} alt=""></img>c
      <div className="flex-container">
        <div className="Title" style={{ backgroundColor: "black" }}>
          {props.ele.strMeal}
        </div>
        {/* <a className="view-btn" href={props.ele.strSource} target="_blank">
          View Receipe
        </a> */}
        <button
          className="view-btn"
          onClick={() => {
            props.randoms("");
            props.results("");
            props.setRes(
              <div>
                <span
                  style={{
                    color: "yellow",
                    fontSize: "50px",
                    fontWeight: "500"
                  }}
                >
                  {props.ele.strMeal}
                </span>
                <div className="receipe">
                  <img
                    src={props.ele.strMealThumb}
                    alt=""
                    className="mainImage"
                  ></img>
                  <div className="MainInst">
                    <h2 className="heading">Ingredients</h2>
                    <div className="process">
                      <ul className="list">
                        {props.ele.strIngredient1 && (
                          <li className="ingr">
                            {props.ele.strIngredient1} {props.ele.strMeasure1}
                          </li>
                        )}
                        {props.ele.strIngredient2 && (
                          <li className="ingr">
                            {props.ele.strIngredient2} {props.ele.strMeasure2}
                          </li>
                        )}
                        {props.ele.strIngredient3 && (
                          <li className="ingr">
                            {props.ele.strIngredient3} {props.ele.strMeasure3}
                          </li>
                        )}
                        {props.ele.strIngredient4 && (
                          <li className="ingr">
                            {props.ele.strIngredient4} {props.ele.strMeasure4}
                          </li>
                        )}
                        {props.ele.strIngredient5 && (
                          <li className="ingr">
                            {props.ele.strIngredient5} {props.ele.strMeasure5}
                          </li>
                        )}
                        {props.ele.strIngredient6 && (
                          <li className="ingr">
                            {props.ele.strIngredient6} {props.ele.strMeasure6}
                          </li>
                        )}
                        {props.ele.strIngredient7 && (
                          <li className="ingr">
                            {props.ele.strIngredient7} {props.ele.strMeasure7}
                          </li>
                        )}
                        {props.ele.strIngredient8 && (
                          <li className="ingr">
                            {props.ele.strIngredient8} {props.ele.strMeasure8}
                          </li>
                        )}
                        {props.ele.strIngredient9 && (
                          <li className="ingr">
                            {props.ele.strIngredient9} {props.ele.strMeasure9}
                          </li>
                        )}
                        {props.ele.strIngredient10 && (
                          <li className="ingr">
                            {props.ele.strIngredient10} {props.ele.strMeasure10}
                          </li>
                        )}
                        {props.ele.strIngredient11 && (
                          <li className="ingr">
                            {props.ele.strIngredient11} {props.ele.strMeasure11}
                          </li>
                        )}
                        {props.ele.strIngredient12 && (
                          <li className="ingr">
                            {props.ele.strIngredient12} {props.ele.strMeasure12}
                          </li>
                        )}
                        {props.ele.strIngredient13 && (
                          <li className="ingr">
                            {props.ele.strIngredient13} {props.ele.strMeasure13}
                          </li>
                        )}
                        {props.ele.strIngredient14 && (
                          <li className="ingr">
                            {props.ele.strIngredient14} {props.ele.strMeasure14}
                          </li>
                        )}
                        {props.ele.strIngredient15 && (
                          <li className="ingr">
                            {props.ele.strIngredient15} {props.ele.strMeasure15}
                          </li>
                        )}
                        {props.ele.strIngredient16 && (
                          <li className="ingr">
                            {props.ele.strIngredient16} {props.ele.strMeasure16}
                          </li>
                        )}
                        {props.ele.strIngredient17 && (
                          <li className="ingr">
                            {props.ele.strIngredient17} {props.ele.strMeasure17}
                          </li>
                        )}
                        {props.ele.strIngredient18 && (
                          <li className="ingr">
                            {props.ele.strIngredient18} {props.ele.strMeasure18}
                          </li>
                        )}
                        {props.ele.strIngredient19 && (
                          <li className="ingr">
                            {props.ele.strIngredient19} {props.ele.strMeasure19}
                          </li>
                        )}
                        {props.ele.strIngredient20 && (
                          <li className="ingr">
                            {props.ele.strIngredient20} {props.ele.strMeasure20}
                          </li>
                        )}
                      </ul>
                    </div>
                    <h2 className="heading">Method</h2>
                    <div
                      style={{
                        textAlign: "center",
                        backgroundColor: "#404040",
                        padding: "0 5px 0 5px"
                      }}
                    >
                      {props.ele.strInstructions}
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        >
          View Receipe
        </button>
      </div>
    </div>
  );
}
export default Random;
