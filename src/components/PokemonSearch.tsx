import React, { Component } from 'react';
import User from '../interfaces/User';



class PokemonSearch extends Component<User> {
    render() {
        const { name } = this.props;
        return (
            <div>
                <p>
                    User {name}
                </p>
            </div>
        );
    }
}

export default PokemonSearch;