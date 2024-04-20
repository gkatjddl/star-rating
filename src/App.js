import logo from './logo.svg';
import './App.css';
// StarRating 컴포넌트를 import한다
import StarRating from './components/star-rate';

function App() {
  return (
    <div className="App">
      <StarRating starCount={10}/>
      <StarRating starCount={8}/>
      <StarRating starCount={6}/>
      <StarRating starCount={4}/>
      <StarRating starCount={2}/>
      <StarRating starCount={2}/>
      <StarRating starCount={4}/>
      <StarRating starCount={6}/>
      <StarRating starCount={8}/>
      <StarRating starCount={10}/>
    </div>
  );
}

export default App;
