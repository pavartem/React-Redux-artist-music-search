import React, {Component} from 'react';

class Result extends Component {


    render() {


        return (
            <div className="list-group rounded shadow-sm mt-1">
                <a href={this.props.search[0].url}
                   className="list-group-item list-group-item-action">{this.props.search[0].name}</a>
                <a href={this.props.search[1].url}
                   className="list-group-item list-group-item-action">{this.props.search[1].name}</a>
                <a href={this.props.search[2].url}
                   className="list-group-item list-group-item-action">{this.props.search[2].name}</a>
                <a href={this.props.search[3].url}
                   className="list-group-item list-group-item-action">{this.props.search[3].name}</a>
                <a href={this.props.search[4].url}
                   className="list-group-item list-group-item-action">{this.props.search[4].name}</a>
                <a href={this.props.search[5].url}
                   className="list-group-item list-group-item-action">{this.props.search[5].name}</a>

            </div>
        );
    }
}


export default Result;