import React, { Component } from 'react';
import SingleDetails from './SingleDetails';
import SingleImage from './SingleImage';


class Single extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starships: null
        }
    }

    componentDidMount = () => {
        this.getData(this.props.url);
    }

    componentWillReceiveProps = (newProps) => {
        this.getData(newProps.url)
    }


    getData = (starshipURL) => {
        
        this.fetchAPI(starshipURL).then(data => {
            console.log(data)
            this.setState({
                starships: data
            })
        })
    }

   
    fetchAPI = async (url) => {

        let apiURL = url;
        try {
            const resp = await fetch(apiURL)
            return resp.json()
        } catch (err) {
            console.log(err)
        }
    }


    render() {
        let starship = this.state.starships;
        let shadowStyle = {
            WebkitBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            MozBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            boxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            textAlign: 'center', width: '300px', 
            margin: '15px', backgroundColor: 'lightgrey',color:'darkgrey',
            position: 'relative', height: '200px'
        }
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
    }
}

export default Single