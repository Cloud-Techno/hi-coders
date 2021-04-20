import logo from './logo.svg';
import './App.css';
import QuizApp from './component/QuizApp'

/**
 * 
 * @returns Quiz kac soru olacagi app.js'den QuizApp.js'e gonderilir.(questionNumber)
 */
function App() {
  return (
    <div className="App">
      <QuizApp questionNumber={10}/>
    </div>
  );
}

export default App;