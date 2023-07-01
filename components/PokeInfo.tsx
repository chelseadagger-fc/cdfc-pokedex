// import { getPokeData } from '../lib/pokeData';

type pokeData = {
    name: string,
    id: number,             // .id
    height: number,
    weight: number
}  

function capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export default function PokeInfo(pokeData: pokeData) {
    return (
        <>
            <h1>Pokemon information.</h1>
            <ul>
                <li>Name: {capitalize(pokeData.name)}</li>
                <li>No: {pokeData.id}</li>
                <li>Height: {pokeData.height / 10}m</li>
                <li>Weight: {pokeData.weight / 10}kg</li>
            </ul>
        </>
    )
}