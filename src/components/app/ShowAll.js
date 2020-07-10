import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';


class ShowAll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextPage: '',
            category: '',
            starships: []
        }
    }

    componentWillReceiveProps(newProps) {
        if(newProps.category !== this.state.category || this.state.nextPage !== this.props.url){
          this.setState({
              starships: []
          },()=>this.getData())
         }
       
     }

    componentDidMount = () => {
        window.addEventListener('scroll', this.infiniteScroll);
        this.getData(this.props.url);
    }

    getData = (url) => {
        if (!url) url = this.state.nextPage;
        this.fetchAPI(url).then(data => {
            if(data){
            this.setState({
                nextPage: data.next,
                category: this.props.category,
                starships: [...this.state.starships,...data.results]
            })
        }
            
        })
    }

    infiniteScroll = () => {
        // End of the document reached?
        if (window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight){
         
           this.getData();           
        }
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
        console.log(this.props.url,this.state.nextPage)
        let starshipList = this.state.starships;
        let shadowStyle = {
            WebkitBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            MozBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            boxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            textAlign: 'center', width: '350px', 
            margin: '15px', backgroundColor: 'lightgrey',color:'darkgrey',
            position: 'relative', height: '200px'
        }
        return (
            <div>
                {starshipList ?
                    <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around' }}>
                        {starshipList.map((starship, idx) =>{
                            let idStr = starship.url.split('/');
                             let starshipID = idStr[5];
                          return(  <Link to={{"pathname": `/${this.props.category}/${starshipID}`}} >
                            <Paper key={idx} elevation={3} style={shadowStyle}>

                            <div style={{ width: '350px', height: '100px', textAlign: 'center' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox='0 0 300 24'>
                                                <text textLength='290' lengthAdjust="spacing" x='5' y="14" height="100%" >
                                                    {starship.name}
                                                </text>
                                            </svg>
                                        </div>
                                <img src={`${starship.url.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ width: '100%', height: '140px', position: 'absolute', bottom: '2px', left: '0px' }} />
                            </Paper>
                            </Link>)
                    })}
                    </div>
                    :
                    <div>Loading data</div>
                }
            </div>
        )
    }
}

export default ShowAll