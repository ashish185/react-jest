import CallApi from './ApiTestingEx/CallApi';
import Button from './Button/Button';
import Counter from './VirtualDom/Counter';

function App() {
  return (  
    <>
    <Counter/>
    <Button label="Test"/>
    <CallApi></CallApi>
    </>
  );
}

export default App;
