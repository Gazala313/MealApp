function Header(props) {
  return (
    <div className="nav">
      <button
        className="main"
        onClick={() => {
          props.setResult("");
          props.setError("");
          props.setResult("");
          props.setRes("");
          props.setInputs("");
        }}
      >
        <span style={{ color: "orange" }}>Meal</span>
        <span style={{ color: "yellow" }}>App</span>
      </button>

      <div>
        <img
          className="Image"
          src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-meals-new-normal-flaticons-lineal-color-flat-icons-3.png"
        ></img>
      </div>
    </div>
  );
}

export default Header;
