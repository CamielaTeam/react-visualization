import {funcion1, funcion2} from 'rutaDependencia1';
import Body from 'rutaBody';
import ListaComentarios from 'rutaListaComentarios';
function Foro(props){
    return(
        <div>
          <titulo>
          </titulo>
          <Body creador={creador} fecha={fecha} tema={tema}>
          </Body>
          <ListaComentarios nombreForo={nombreForo} tema={tema}>
          </ListaComentarios>
        </div>
    );
};
App.propTypes = {
  appProps: PropTypes.bool
};