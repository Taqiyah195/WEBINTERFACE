import HobbyCard from "./Hobbycard.jsx"; 
import "./App.css"; 
import Sleeping from "./sleeping.jpg"; 
import Cooking from "./cooking.jpg"; 
import Watchingmovies from "./watchingmovies.jpg"; 
import Gardening from "./gardening.jpg"; 
function App() { 
  return ( 
    <div className="container"> 
      <h1>  🌸 MY HOBBIES 🌸  </h1> 
      <div className="cards"> 
        <HobbyCard 
          name="Sleeping" 
          image={Sleeping} 
          description="Sleeping helps me 
relax, recharge my energy, and stay 
healthy." 
        /> 
        <HobbyCard 
          name="Cooking" 
          image={Cooking} 
          description="I enjoy cooking 
delicious meals and trying new recipes." 
        /> 
        <HobbyCard 
          name="Watching Movies" 
          image={Watchingmovies} 
          description="Watching movies is 
my favorite way to relax and enjoy 
different stories." 
        /> 
        <HobbyCard 
          name="Gardening" 
          image={Gardening} 
          description="I enjoy growing plants 
and taking care of flowers. Gardening 
helps me relax and connect with 
nature." 
        /> 
      </div> 
    </div> 
  ); 
} 
export default App; 