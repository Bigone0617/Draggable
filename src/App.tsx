import Box from './Components/Box';
import Draggable from './Components/Draggable';

function App() {
  return (
    <div className="App">
      <Draggable width={500} height={500}>
        <Box width={100} height={100} color='blue'/>
      </Draggable>
    </div>
  );
}

export default App;
