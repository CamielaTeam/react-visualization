import {funcion1, funcion2} from 'rutaDependencia1';
import Foro from 'rutaForo';
import Body from 'rutaBody';
import ListaComentarios from 'rutaListaComentarios';
function App(props){
    return(
        <Foro>
        </Foro>
    );
};
App.propTypes = {
  appProps: PropTypes.bool
};