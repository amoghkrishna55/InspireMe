import App from "./App.tsx";
import Title from "./Title.tsx";

function Test() {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item">
          <Title />
        </div>
        <div className="flex-item">
          <div className="app">
            <App />
          </div>
        </div>
        <div className="flex-item myName">
          <p> - Developed By Amogh Krishna</p>
        </div>
      </div>
    </>
  );
}

export default Test;
