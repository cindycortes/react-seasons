import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props); // need to use this every time we use a constructor
        
        this.state = { lat: null };
    
    }
    
    render () { // method
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position), // success callback
            (err) => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root')); 