import {asd, bfs} from 'ruta';
import List from 'ruta';
import CustomButton from 'ruta';
function LandingView(props){
    return(
        <div>
          <List itemList={itemList} listType={listType}/>
          <CustomButton onClick={onClick}></CustomButton>
        </div>
    );
};
LandingView.propTypes = {
  isLogged: PropTypes.bool,
  itemList: PropTypes.array
};