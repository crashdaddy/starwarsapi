import React, { Component } from 'react';

class SingleImage extends Component {

    render() {
        let shipUrl = this.props.ship.url;
        let imgUrl = shipUrl.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg') + '/1.jpg';
    return(
        <div>
            <img src={imgUrl} style={{width:'100%',height:'100%',border:'1px solid lightgrey'}}/>
        </div>
    )}
}

export default SingleImage