function Image(props) {
  return (
    <div className="itm">
      <img src={props.item.strMealThumb} alt=""></img>
      <div className="flex-container">
        <div
          className="Title"
          style={{ backgroundColor: " rgb(212, 208, 171)" }}
        >
          {props.item.strMeal}
        </div>
        {/* <a href={props.item.strSource} className="view-btn">
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
                  {props.item.strMeal}
                </span>

                <div className="receipe">
                  <img
                    src={props.item.strMealThumb}
                    alt=""
                    className="mainImage"
                  ></img>

                  <div className="MainInst">
                    <h2 className="heading">Ingredients</h2>
                    <div className="process">
                      <ul className="list">
                        {props.item.strIngredient1 && (
                          <li className="ingr">
                            {props.item.strIngredient1} {props.item.strMeasure1}
                          </li>
                        )}
                        {props.item.strIngredient2 && (
                          <li className="ingr">
                            {props.item.strIngredient2} {props.item.strMeasure2}
                          </li>
                        )}
                        {props.item.strIngredient3 && (
                          <li className="ingr">
                            {props.item.strIngredient3} {props.item.strMeasure3}
                          </li>
                        )}
                        {props.item.strIngredient4 && (
                          <li className="ingr">
                            {props.item.strIngredient4} {props.item.strMeasure4}
                          </li>
                        )}
                        {props.item.strIngredient5 && (
                          <li className="ingr">
                            {props.item.strIngredient5} {props.item.strMeasure5}
                          </li>
                        )}
                        {props.item.strIngredient6 && (
                          <li className="ingr">
                            {props.item.strIngredient6} {props.item.strMeasure6}
                          </li>
                        )}
                        {props.item.strIngredient7 && (
                          <li className="ingr">
                            {props.item.strIngredient7} {props.item.strMeasure7}
                          </li>
                        )}
                        {props.item.strIngredient8 && (
                          <li className="ingr">
                            {props.item.strIngredient8} {props.item.strMeasure8}
                          </li>
                        )}
                        {props.item.strIngredient9 && (
                          <li className="ingr">
                            {props.item.strIngredient9} {props.item.strMeasure9}
                          </li>
                        )}
                        {props.item.strIngredient10 && (
                          <li className="ingr">
                            {props.item.strIngredient10}{" "}
                            {props.item.strMeasure10}
                          </li>
                        )}
                        {props.item.strIngredient11 && (
                          <li className="ingr">
                            {props.item.strIngredient11}{" "}
                            {props.item.strMeasure11}
                          </li>
                        )}
                        {props.item.strIngredient12 && (
                          <li className="ingr">
                            {props.item.strIngredient12}{" "}
                            {props.item.strMeasure12}
                          </li>
                        )}
                        {props.item.strIngredient13 && (
                          <li className="ingr">
                            {props.item.strIngredient13}{" "}
                            {props.item.strMeasure13}
                          </li>
                        )}
                        {props.item.strIngredient14 && (
                          <li className="ingr">
                            {props.item.strIngredient14}{" "}
                            {props.item.strMeasure14}
                          </li>
                        )}
                        {props.item.strIngredient15 && (
                          <li className="ingr">
                            {props.item.strIngredient15}{" "}
                            {props.item.strMeasure15}
                          </li>
                        )}
                        {props.item.strIngredient16 && (
                          <li className="ingr">
                            {props.item.strIngredient16}{" "}
                            {props.item.strMeasure16}
                          </li>
                        )}
                        {props.item.strIngredient17 && (
                          <li className="ingr">
                            {props.item.strIngredient17}{" "}
                            {props.item.strMeasure17}
                          </li>
                        )}
                        {props.item.strIngredient18 && (
                          <li className="ingr">
                            {props.item.strIngredient18}{" "}
                            {props.item.strMeasure18}
                          </li>
                        )}
                        {props.item.strIngredient19 && (
                          <li className="ingr">
                            {props.item.strIngredient19}{" "}
                            {props.item.strMeasure19}
                          </li>
                        )}
                        {props.item.strIngredient20 && (
                          <li className="ingr">
                            {props.item.strIngredient20}{" "}
                            {props.item.strMeasure20}
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
                      {props.item.strInstructions}
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
export default Image;
