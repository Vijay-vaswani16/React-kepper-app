import React from 'react';
import auth, { StartFirebase } from "../Firebase/firebase";
import { ref, set, get, update, remove, child } from "../Firebase/firebase";

class Crud extends React.Components{
    constructor(props) {
        super(props);
        this.state = {
            db: '',
            title: '',
            take_a_note: ''
        }
    }
    componentDidMount() {
        this.setState({
            db:  StartFirebase() 
        });
    }
    render() {
        return (
            <>
                <label>Title</label>
                <input type='text' id="userbox" value={this.state.username}
                onChange={e=>{this.setState({username:e.target.value})}}

                />
                <br/><br/>
                <label>Take a note...</label>
                <input type='text' id="userbox" value={this.state.take_a_note}
                onChange={e=>{this.setState({take_a_note:e.target.value})}}

                />
                <br /><br />
                
                
            </>
        )
    }
}