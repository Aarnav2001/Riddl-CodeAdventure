import './App.css';

import CustomButton from './custom components/Button';
import AppBar from './custom components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <CustomButton variant="contained">
        Primary
      </CustomButton>
    </div>
  );
}

export default App;
