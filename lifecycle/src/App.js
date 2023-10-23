import Button from './components/Button/Button';
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent';
import { buttonTypes } from './components/Button/ButtonTypes';
const App = () => {
  return(

    <div>
       <FunctionComponent/>
       <Button buttonType={buttonTypes.info} buttonTitle={'Bilgi'} />
       <Button buttonType={buttonTypes.info_large} buttonTitle={'Bilgi Large'} />
    </div>
  );
};

export default App;
