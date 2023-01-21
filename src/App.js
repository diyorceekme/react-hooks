import HookEffect from './allHooks/effectFunction';
import HookState from './allHooks/stateFunction';
import HookContext, { myContext } from './allHooks/contextFunction';
import HookRef from './allHooks/refFunction';
import './App.css';

function App() {

  return (
    <div>
      {/* <HookState /> */}
      {/* <HookEffect /> */}
      {/* <myContext.Provider value="Hello from Context">
        <HookContext />
      </myContext.Provider> */}
      {/* <HookRef /> */}
    </div>
  );
}

export default App;
