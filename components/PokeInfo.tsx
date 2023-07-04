import Image from 'next/image';

type pokeData = {
    name: string,
    id: number,
    height: number,
    weight: number,
    type0: string,
    type1?: string,
    ability0: string,
    ability1: string,
    dexEntry: string
}



export default function PokeInfo(pokeData: pokeData) {
    const urlGen5 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";
    const urlGen6 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/"
    
    function capitalize(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function pretty(name: string) {
        let prettyStr = name.toLowerCase().split('-');
        for (let i = 0; i < prettyStr.length; i++) {
            prettyStr[i] = prettyStr[i].charAt(0).toUpperCase() + prettyStr[i].substring(1);
        };
        return prettyStr.join(' ');
    }

    const typeColors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
        default: '#FFFFFF'
    }

    const secondType = (pokeData.type1 !== undefined ? (
        <div className={`${pokeData.type1} flex items-center justify-center mt-3 text-sm p-1 w-20 border-black border-2 rounded-lg`}>
            <p>{(pokeData.type1).toUpperCase()}</p>
        </div> 
    ) : null )

    const secondAbility = (pokeData.ability1 !== undefined ? (
        <div className="flex flex-col items-center py-2">
            <p className="text-xl w-40 py-2 text-center rounded-3xl bg-slate-300/75">{pretty(pokeData.ability1)}</p>
        </div>
    ) : null )

    return (
        <div className="flex flex-col my-5 mx-3 ">
            <div className="flex flex-row justify-evenly items-center ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold">{(pokeData.name).toUpperCase()}</h1>
                    <h2 className="text-xl mt-2 pr-3">#{pokeData.id}</h2>
                    <div className="flex flex-row gap-x-2">
                        <div className={`${pokeData.type0} flex items-center justify-center mt-3 text-sm p-1 w-20 border-black border-2 rounded-lg`}>
                            <p>{(pokeData.type0).toUpperCase()}</p>
                        </div>
                        {secondType}
                    </div>
                </div>
                <div className="relative h-48 w-48 ml-4 lg:h-80 lg:w-80 mb-5">
                    <Image 
                        src={pokeData.id <= 649 ? (urlGen5 + pokeData.id + '.gif') : (urlGen6 + pokeData.id + '.png')}
                        fill={true}
                        alt={"Image of " + pokeData.name} />
                </div>
            </div>
            <div className="mt-3">
                <h2 className="text-center text-md px-2">{pokeData.dexEntry}</h2>
                <p className="text-center text-xs font-bold mt-1 text-stone-500">Pokedex Entry</p>
            </div>
            <div className="flex flex-col justify-end">
                <div className="flex flex-row justify-evenly items-center text-2xl mt-4">
                    <div className="flex flex-col items-center py-2">
                        <p className="text-xl w-40 py-2 text-center rounded-3xl bg-slate-300/75">{pokeData.height / 10}m</p>
                        <p className="text-xs font-bold mt-1 text-stone-500">Height</p>
                    </div>
                    <div className="flex flex-col items-center py-2">
                        <p className="text-xl w-40 py-2 text-center rounded-3xl bg-slate-300/75">{pokeData.weight / 10}kg</p>
                        <p className="text-xs font-bold mt-1 text-stone-500">Weight</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-evenly">
                        <div className="flex flex-col items-center py-2">
                            <p className="text-xl w-40 py-2 text-center rounded-3xl bg-slate-300/75">{pretty(pokeData.ability0)}</p>
                            {pokeData.ability1 === undefined ? <p className="text-xs font-bold mt-1 text-stone-500">Ability</p> : null}
                        </div>
                        {secondAbility}
                    </div>
                    {pokeData.ability1 !== undefined ? <p className="text-xs font-bold text-center text-stone-500">Abilities</p> : null}
                </div>
                <div className="flex flex-row justify-evenly items-center text-2xl mt-4">
                    <h1>something</h1>
                </div>
                <div className="invisible lg:visible flex flex-row justify-evenly items-center text-2xl mt-4">
                    <h1>(invisible on mobile; visible on desktop)</h1>
                </div>
            </div>
        </div>
    )
}