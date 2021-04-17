import { useReducer } from "react";
import "./App.css";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      state = state + 1;
      break;
    case "DECREMENT":
      state = state - 1;
      break;
    default:
      break;
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="col-6 text-center h2">Count: {state}</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <button
            className="btn btn-success"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
