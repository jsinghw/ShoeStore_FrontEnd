import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            shoes: [],
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/shoe/?format=json')
        .then(res => res.json())
        .then(data => this.setState({shoes: data}))
    }

    render() {
        return (
            <div>
                {this.state.shoes.map((s) => {
                    return (
                        <ul>
                            <div>Shoe</div>
                            <li>Size: {s.size}</li>
                            <li>Brand Name: {s.brand_name}</li>
                            <li>Manufacturer: {s.manufacturer}</li>
                            <li>Color: {s.color}</li>
                            <li>Material: {s.material}</li>
                            <li>Shoe Type: {s.shoe_type}</li>
                            <li>Fasten Type: {s.fasten_type}</li>
                        </ul>
                    )
                })}
            </div>
        );
    }
}

export default App;
