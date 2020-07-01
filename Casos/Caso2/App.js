import {asd, bfs} from 'ruta';
import LandingContainer from 'ruta';
function App(props){
    return(
        <div>
          <LandingContainer isLogged={isLogged}>
          </LandingContainer>
        </div>
    );
};
App.propTypes = {
  appProps: PropTypes.bool
};