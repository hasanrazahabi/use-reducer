import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASEMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLE_ACTION":
      return { count: state.count, showText: !state.showText };
  }
  return state;
};
function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: false,
  });
  return (
    <div className="App">
      {state.count}
      <div>
        <button
          onClick={() => {
            {
              dispatch({ type: "INCREASEMENT" });
              dispatch({ type: "TOGGLE_ACTION" });
            }
          }}
        >
          Increasement
        </button>
      </div>
      <div>{state.showText && <p>This is react World</p>}</div>
    </div>
  );
}

export default App;
