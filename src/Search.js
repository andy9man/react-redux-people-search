import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }
    render() {
        const users = this.state.input === '' ? this.props.users : this.props.users.filter( user => user.name.includes(this.state.input) );
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.submit(e);
                }}
                >
                    <input type="text" style={ {diplay: 'block', width: '100%'} }  onInput={ (e) => (this.setState( {input: e.target.value} )) }/>
                </form>
                <select
                    name="nameSelect"
                    size={this.props.users.length}
                    style={ {width: '100%', marginTop: '20px', overflow: 'hidden'} }
                    onChange={
                        (e) => (
                            this.props.change(e)
                        )
                    }
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

export default Search;