import {asd, bfs} from 'ruta';
import LandingView from 'ruta';
function LandingContainer(props){
    return(
        <div>
          <LandingView isLogged={isLogged} itemList={itemList}>
          </LandingView>
        </div>
    );
};
LandingContainer.propTypes = {
  isLogged: PropTypes.bool
};