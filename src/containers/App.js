import { connect } from 'react-redux'
import App from '../components/app/App'
import { setCategory, setView, setItemID, setStarship ,concatStarship} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        category: state.category,
        view: state.view,
        itemID: state.itemID,
        starships: state.starships
    }
}

// added this function so we can send data FROM our component
const mapDispatchToProps = (dispatch) => {
    return {
        setCategory: (newCat) => dispatch(setCategory(newCat)),
        setView: (newView) => dispatch(setView(newView)),
        setItemID: (newItemID) => dispatch(setItemID(newItemID)),
        setStarship: (newStarship) => dispatch(setStarship(newStarship)),
        concatStarship: (newStarship) => dispatch(concatStarship(newStarship))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)