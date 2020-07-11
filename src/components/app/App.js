import React, {Component} from 'react';
import ShowAll from './ShowAll';


class App extends Component {
constructor(props) {
    super(props)

    this.state={
        category: this.props.category,
        id: '',
        view: 'all',
        profileOrError: null
    }
}

static getDerivedStateFromProps(nextProps, prevState) {
    let view = ''
    // Store prevUserId in state so we can compare when props change.
    // Clear out any previously-loaded user data (so we don't render stale stuff).
    if (nextProps.match.params.category !== prevState.category || nextProps.match.params.itemID != prevState.id) {
        if (nextProps.match.params.itemID!=='') view= "single"; else view='all'
      return {
        category: nextProps.match.params.category,
        id: nextProps.match.params.itemID,
        view: view,
        profileOrError: "loading",
      };
    }

    // No state update necessary
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.profileOrError === "loading") {
      // At this point, we're in the "commit" phase, so it's safe to load the new data.
      this.getData(this.state.category);
    }
  }

    componentDidMount = () => {
       // if (this.props.category==='') this.props.setCategory('starships')
        this.getData()
       
    }

    getData = (url) => {
     if (this.state.profileOrError==="loading") {
        if (!url) url='vehicles'
        let dataURL = `https://swapi.dev/api/${url}/`;
        if(this.state.id) dataURL += this.state.id;
        
        let view = "all"
        fetch(dataURL)
            .then(res => res.json())
            .then(data => {
                if(data.results){
                this.props.setStarship(data.results);
                } else {
                this.props.setStarship(data);
                view="single"
                }

                this.setState({
                    profileOrError: null,
                    view: view
                })
            })
     }
    }

    render(){
        let starshipList = null
        if (this.props.starships && this.props.starships.length>0){
         starshipList = this.props.starships
        }
        if (starshipList) {
        return(
            <div>{this.state.view==="all" ?
             <div><ShowAll newcategory={this.state.category} starships={starshipList} /></div>
             :
            <div style={{fontSize:'100px'}}>{starshipList.name}</div>
             }
            </div>
        )
        } else {
            return <div>himom</div>
        }
    }
}

export default App