import React, {Component} from 'react';
import logo from '../img/logo.png'
import Search from "../components/Search";
import Result from "../components/Result";

import {setSearchAction} from '../actions/actionSearch'

import {connect} from 'react-redux'

class App extends Component {
    render() {
        return (
            <div className="container my-3">
                <div className="col-6 offset-3">
                    <img src={logo} className='img-fluid my-2' alt=""/>
                    <Search setSearch={this.props.setSearchFunction}/>
                    <Result search={this.props.search}/>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        search: state.searchEngine.search
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSearchFunction: search => {
            dispatch(setSearchAction(search));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
