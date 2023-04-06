

import Tooltip from './Toottip';

function App() {
  
  
  return (
    <div className="App">
      <div className='container-btn'>
        <div className="btn">
            <Tooltip text = {"hii thid is demo of tooltip on press btn"}>
              <button className="press-btn" >
                Press
              </button>
            </Tooltip>
            
        </div>
      </div>
      
    </div>
  );
}

export default App;
