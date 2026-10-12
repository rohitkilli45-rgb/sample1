function App(){
  const [count,setCount] = useState(0);
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1) 
   }
  return (
    <div>
      <p>Demo</p>
      <button onClick={increment}>+Increment</button>
      <p>Count:{count}</p>
      <button onClick={decrement}>-Decrement</button>
    </div>
    

  );
}
export default App;