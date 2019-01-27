import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props); // need to use this every time we use a constructor
        
        // this is the only time we do direct assignment 
        // to this.state. When we want to update, we use setState
        this.state = { lat: null };
    
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setstate!!
                this.setState({ lat: position.coords.latitude });
            }, 
            (err) => console.log(err)
        );
    }
    
    render () { // method
        return <div>Latitude: {this.state.lat} </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root')); 