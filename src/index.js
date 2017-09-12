import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 5,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event, prop) {
        this.setState( {
            count: event.target.value,
        });
        console.log(event.target.value);
    }

    drawBox(){
        return <div className="block">{this.state.count}</div>
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
                {this.drawBox()};
                {this.drawBox()};
                {this.drawBox()};
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))