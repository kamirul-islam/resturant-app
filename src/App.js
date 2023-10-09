import React from 'react';
import Resturant from './componant/card/resturant';
import Navbar from './componant/navbar/navbar';
import Carousle from './componant/carousle/carousle';
import Review from './componant/review/review';
import Footer from './componant/footer/footer';
const App = () => {
  return (
    <div className="App" style={{backgroundColor: "#F0F2F5"}}>
      <Navbar />
      <Carousle />
      <Resturant />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
