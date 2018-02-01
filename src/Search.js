import React, {Component} from 'react';
import { connect } from 'react-redux';
import { USER_SELECTED } from "./state/helper.js"

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }
    render() {
        const users = this.state.input === '' ? this.props.users : this.props.users.filter( user => user.name.toLowerCase().includes(this.state.input.toLowerCase()) );
        return (
            <div>
                <input type="text" style={ {diplay: 'block', width: '100%'} }  onInput={ (e) => (this.setState( {input: e.target.value} )) }/>
                <select
                    name="nameSelect"
                    size={this.props.users.length}
                    style={ {width: '100%', marginTop: '20px', overflow: 'hidden'} }
                    onChange={ (e) => this.props.setUserPage(e.target.value) }
                    onClick={ (e) => this.props.setUserPage(e.target.value) }
                >
                    {
                    users.map((name, index) => {
                    return (
                        <option key={index} id={name.id} value={name.id}>{name.name}</option>
                    )
                    })}
                </select>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserPage(userId) {
            dispatch( {type: USER_SELECTED, payload: userId} )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);