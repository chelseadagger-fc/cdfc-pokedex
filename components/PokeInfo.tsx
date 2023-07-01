// import { getPokeData } from '../lib/pokeData';
import Image from 'next/image';

type pokeData = {
    name: string,
    id: number,
    height: number,
    weight: number,
}  

function capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export default function PokeInfo(pokeData: pokeData) {
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';

    return (
        <>
            <h1>Pokemon information.</h1>
            <ul>
                <li><Image 
                    src={url + pokeData.id + '.gif'}
                    width={250}
                    height={250}
                    alt={"Image of " + pokeData.name} /></li>
                <li>Name: {capitalize(pokeData.name)}</li>
                <li>No: {pokeData.id}</li>
                <li>Height: {pokeData.height / 10}m</li>
                <li>Weight: {pokeData.weight / 10}kg</li>
            </ul>
        </>
    )
}