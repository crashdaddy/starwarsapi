import React,{Component} from 'react';
import '../../App.css';
import Single from './Single'
import ShowAll from './ShowAll'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: "starships",
      view: 'all',
      itemID: '',
      dataURL: "https://swapi.dev/api/starships"
    }
  }

 componentWillReceiveProps(newProps) {
   if(newProps.match.params.category !== this.state.category || newProps.match.params.itemID != this.state.itemID){
      let urlParams=newProps.match.params.category;
      let viewParams=this.state.view
      let itemParams = newProps.match.params.itemID;
      let dataURL = '';
      let view="all"
      if(itemParams) {
     dataURL = `https://swapi.dev/api/${urlParams}/${itemParams}/`;
        view= "single";
      } else {dataURL = `https://swapi.dev/api/${urlParams}/`;
      view="all";
    }
       this.setState({
        category: urlParams,
        dataURL: dataURL,
        view: view
      })
    }
  
}

 
  render() {
  return (
    <div className="App">
      <header className="App-header">
      View: {this.state.view}<br/>
      URL: {this.state.dataURL}
      {this.state.view==="single" ? 
      <div><Single url={this.state.dataURL} /></div>  
    :
    <div><ShowAll category={this.state.category} url={this.state.dataURL}/></div>
    }
      </header>
    </div>
  );
  }
}

export default App;
