import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 4,
        };
        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(event) {
        this.setState( {
            count: event.target.value,
        });
        console.log(event.target.value);
        
    }

    render() {
        return (
            <div>
                <div>
                    <input type="number" value={this.state.count}
                        onChange={this.onInputChange}
                        min="0" />
                </div>
                <br />
                <div className="block">1</div>
                <div className="block">2</div>
                <div className="block">3</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))