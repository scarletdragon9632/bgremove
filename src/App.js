import Header from './Header';
import Content from './Content';
import Remover from './Remover';
// import Footer from './Footer';

import './index.css';


function App() {

  
  
  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div>
      <Header
      refreshPage={refreshPage}
      />
      <Content />
      <Remover />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
