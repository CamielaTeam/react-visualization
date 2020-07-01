import {funcion1} from 'dependencia1';
function Body(props){
    return(
        <div>
          <titulo/>
          <creador/>
          <tema/>
          <fecha/>
        </div>
    );
};
LandingContainer.propTypes = {
  creador: PropTypes.string,
  fecha: PropTypes.string,
  tema: PropTypes.string
};