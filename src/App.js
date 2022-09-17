import "./App.css";
import CursorManager from "./CustomCursor/CursorManager";
import CustomCursor from "./CustomCursor";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <CursorManager>
        <CustomCursor />
        <div className="App">
          <Gallery />
        </div>
      </CursorManager>
    </>
  );
}

export default App;
