import './App.css';
import './Header'
import Header from './Header';

function App() {
  return (
    <div>
      <Header brand='Mateus Faustino'
      items={[
        {name:'about', link:'/about'},
        {name:'contact', link:'/contact'},
        {name:'buy',link:'/buy'}]
      }
      >

      </Header>
    </div>
  );
}

export default App;
