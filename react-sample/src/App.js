import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [output, setOutput] = useState();
  const getSentence = () => {
    // if (selectedNode.length == 0) {
    //   alert("단어를 선택해주세요!");
    //   return;
    // }
    const data = {
      firstWord: "비행기",
      // firstWord: selectedNode[0].label,
    };
    axios
      .post("http://localhost:5000/api/hello", data)
      .then((response) => {
        // 응답데이터 처리
        setOutput(response);
        console.log("결과값: ", output);
        // 문장생성 완료 여부 처리
        // setIsMakeCompleted(true);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  return (
    <div className="App">
      <button onClick={getSentence}>문장 생성</button>
    </div>
  );
}

export default App;
