import {funcion1, funcion2} from 'rutaDependencia1';
import H from 'rutaH';
function D(props){
    return(
        <div>
          <H propA={a} propB={b} propC={c} propD={d} propE={e} propF={f} propG={g} propH={h}/>
        </div>
    );
};
D.propTypes = {
  a: PropTypes.bool,
  b: PropTypes.bool,
  c: PropTypes.bool,
  d: PropTypes.bool
};