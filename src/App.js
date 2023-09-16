import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'counter & keyword' changes");
  }, [keyword, counter]);
  //useEffect : state가 변해도 무조건 배열 안의 값이 변화할때 코드가 실행된다. 비어있으면 첫 렌더링시에만.

  useEffect(() => {
    //컴포먼트가 생성될때 실행
    return () => {
      // 컴포먼트가 삭제될때 실행
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={keyword}
        onChange={onChange}
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
