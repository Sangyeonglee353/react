import html2canvas from "html2canvas";
import styled from "styled-components";

const AppCSS = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  #temp {
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }
  button {
    margin-top: 10px;
    width: 100px;
    height: 20px;
  }
`;

const onCapture = () => {
  html2canvas(document.querySelector("#temp"), {}).then((canvas) => {
    saveAs(canvas.toDataURL(), "이름.png");
  });
};

const saveAs = (uri, filename) => {
  let link = document.createElement("a");
  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
};
function App() {
  return (
    <AppCSS>
      <div id="temp">Test Capture</div>
      <button onClick={onCapture}>Capture</button>
    </AppCSS>
  );
}

export default App;
