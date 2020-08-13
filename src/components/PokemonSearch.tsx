import React, { Component } from 'react';
import User from '../interfaces/User';

interface SearchState {
    error: boolean,
    pokemon?: Pokemon
};

interface Pokemon {
    name: string,
    numberOfAbilities: number,
    baseExperience: number,
    imageUrl: string
}


class PokemonSearch extends Component<User, SearchState> {
    pokemonRef: React.RefObject<HTMLInputElement>;

    constructor(props: User) {
        super(props);
        this.state = {
            error: false
        };
        this.pokemonRef = React.createRef();
    }

    onSearchClick = (): void => {
        const inputValue = this.pokemonRef.current?.value;
        console.log('inputValue', inputValue);
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then(res => {
                if (res.status !== 200) {
                    console.log('error');
                    this.setState({ error: true });
                    return;
                }
                console.log('no error');
                res.json().then(data => {
                    console.log('in then');
                    this.setState({
                        error: false,
                        pokemon: {
                            name: data.name,
                            numberOfAbilities: data.abilities.length,
                            baseExperience: data.base_experience,
                            imageUrl: data.sprites.front_default
                        }
                    });
                });
            });
    }

    render() {
        const { name, numberOfPokemons } = this.props;
        const { error, pokemon } = this.state;

        let resultMarkup;

        if (error) {
            resultMarkup = <p>Pokemon not found, please try again</p>
        } else if (pokemon) {
            resultMarkup = <div>
                <img src={pokemon.imageUrl} alt='pokemon' className='pokemon-image' />
                <p>
                    {pokemon.name} has {pokemon.numberOfAbilities} abilities and {pokemon.baseExperience} base experience points
                </p>
            </div>
        }

        return (
            <div>
                <p>
                    User {name}
                </p>
                <input type='text' ref={this.pokemonRef} />
                <button onClick={this.onSearchClick} className='my-button'>
                    Search
                </button>
                {resultMarkup}
            </div>
        );
    }
}

export default PokemonSearch;