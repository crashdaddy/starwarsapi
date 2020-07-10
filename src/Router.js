import React from 'react'
import { Switch, Route } from 'react-router';
import App from './components/app/App';

const Router = () => {
    return (
        <Switch>
            <Route exact path ="/" component={App} />
            {/* <Route path="/search/:query?" render={(props)=> <PuzzlePicker {...props} key={Date.now()} />}/>*/}
            {/* <Route path="/starships" component={Starships}/>
            <Route path="/vehicles" component={Vehicles}/>
            <Route path="/species" component={Species}/>
            <Route path="/people" component={People}/>
            <Route path="/planets" component={Planets}/>
            <Route path="/films" component={Films}/>
            {/*<Route path="/login" component={Login}/>
            <Route path="/faves" component={Favorites}/>
                <Route path="/profile/:user" render={(props) => <Profile {...props} key={Date.now()} />} />*/}
            {/* <Route path="/starship/:id" component={Starship} /> 
            <Route path="/vehicle/:id" component={Vehicle} /> 
            <Route path="/specie/:id" component={Specie} /> 
            <Route path="/person/:id" component={Person} /> 
            <Route path="/planet/:id" component={Planet}/>
            <Route path="/film/:id" component={Film}/> */} */}
        </Switch>
    )
}

// Start Router function here //
export default Router