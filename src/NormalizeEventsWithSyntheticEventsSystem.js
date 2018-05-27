import React, {Component} from 'react';

// this will print out the current event type happening in the text area box
class NormalizeEventsWithSyntheticEventsSystem extends Component {
    constructor(){
        super();
        this.state = {currentEvent: '---'}
    }

    update = (e) => {
        this.setState({currentEvent: e.type})
    };

    render() {
        return (
            <div>
                <textarea
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                    cols="30"
                    rows="10" />
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}

export default NormalizeEventsWithSyntheticEventsSystem;