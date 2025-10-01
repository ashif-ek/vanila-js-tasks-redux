
import { counterReducer } from './reducer.js'
import { createStore } from './createStore.js'

document.querySelector('#app').innerHTML = `
  <div>
<h1>Count: <span id="count">0</span></h1>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
        <button id="reset">Reset</button>

   
  </div>
`

const store = createStore(counterReducer);

function render() {
  document.getElementById("count").innerText = store.getState().count;
}




store.subscribe(render);
render();


document.getElementById("increment").onclick = () =>
  store.dispatch({ type: "INCREMENT" });

document.getElementById("decrement").onclick = () =>
  store.dispatch({ type: "DECREMENT" });

document.getElementById("reset").onclick = () =>
  store.dispatch({ type: "RESET" });