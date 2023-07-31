import Header from './component/header/header.js';
import Footer from './component/footer/footer.js';
import SecondHeader from './component/second-header/Second-header.js';
import './app.css'
function App() {
  return (
    <div className='main-body'>
      <Header />
      <SecondHeader />
      <Footer />
    </div>
  );
}

export default App;
