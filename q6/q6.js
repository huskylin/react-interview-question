/** Please write the sample code to debounce handleOnChange **/
export default function App() {
  const debounce = (fn, delay) => {
    let timeoutID = null;
    return (...args) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const callAPI = debounce(() => {
    console.log('send api request');
  }, 2000);
  function handleOnChange(event) {
    callAPI();
  }
  return (
    <div className="App">
      <input type="search" name="p" onChange={handleOnChange} />
    </div>
  );
}
