import React, { Component } from 'react';
import SingleDetails from './SingleDetails';
import SingleImage from './SingleImage';


class ShowSingle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starships: null
        }
    }

 
    render() {
        let starship = this.props.starships;
        
        let shadowStyle = {
            WebkitBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            MozBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            boxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            textAlign: 'center', width: '300px', 
            margin: '15px', backgroundColor: 'lightgrey',color:'darkgrey',
            position: 'relative', height: '200px'
        }
        if (starship.name) {
        return (
            <div style={{marginTop:'60px'}}>
                {starship ? 
               <div style={{width:'100',display:'flex',flexFlow:'row wrap',alignItems:'flex-start',alignContent:'space-between',justifyContent:'space-around'}}>
               <div style={{width:'40%'}}><SingleDetails ship={starship} /></div>
               <div style={{width:'40%',height:'400px'}}><SingleImage ship={starship}/></div>
               </div>
               :
               ''
                }
            </div>
        )
        } else return <div>himom</div>
        
    }
}

export default ShowSingle