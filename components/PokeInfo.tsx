import Image from 'next/image';

type pokeData = {
    name: string,
    id: number,
    height: number,
    weight: number,
    type0: string,
    type1?: string,
    dexEntry: string
}

function capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}



export default function PokeInfo(pokeData: pokeData) {
    const urlGen5 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";
    const urlGen6 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/"
    
    const secondType = (pokeData.type1 !== undefined ? (
        <div className="flex items-center justify-center mt-3 text-xl p-2 w-28 border-black border-2 rounded-lg">
            <p>{(pokeData.type1).toUpperCase()}</p>
        </div> 
    ) : null )

    return (
        <div className="flex flex-col my-5 mx-3">
            <div className="flex flex-col-reverse justify-evenly items-center">
                <div className="flex flex-col justify-center items-center grow">
                    <h1 className="text-5xl font-bold">{(pokeData.name).toUpperCase()}</h1>
                    <h2 className="text-2xl mt-2">#{pokeData.id}</h2>
                    <div className="flex flex-row gap-x-8">
                        <div className="flex items-center justify-center mt-3 text-xl p-2 w-28 border-black border-2 rounded-lg">
                            <p>{(pokeData.type0).toUpperCase()}</p>
                        </div>
                        {secondType}
                    </div>
                </div>
                <div className="relative h-52 w-52 lg:h-80 lg:w-80 mb-5">
                    <Image 
                        src={pokeData.id <= 649 ? (urlGen5 + pokeData.id + '.gif') : (urlGen6 + pokeData.id + '.png')}
                        fill={true}
                        alt={"Image of " + pokeData.name} />
                </div>
            </div>
            <div className="mt-5">
                <h2 className="text-center text-xl">{pokeData.dexEntry}</h2>
            </div>
            <div className="flex flex-col justify-end">
                <div className="flex flex-row justify-evenly items-center text-2xl mt-4">
                    <div className="flex flex-col items-center py-2">
                        <p className="text-3xl px-12 py-3 rounded-xl bg-slate-100/75">{pokeData.height / 10}m</p>
                        <p className="text-base mt-1">Height</p>
                    </div>
                    <div className="flex flex-col items-center py-2">
                        <p className="text-3xl px-12 py-3 rounded-xl bg-slate-100/75">{pokeData.weight / 10}kg</p>
                        <p className="text-base mt-1">Weight</p>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center text-2xl mt-4">
                    <div className="flex flex-col items-center py-2">
                        <p className="text-3xl px-12 py-3 rounded-xl bg-slate-100/75">{pokeData.height / 10}m</p>
                        <p className="text-base mt-1">Ability</p>
                    </div>
                    <div className="flex flex-col items-center py-2">
                        <p className="text-3xl px-12 py-3 rounded-xl bg-slate-100/75">{pokeData.weight / 10}kg</p>
                        <p className="text-base mt-1">Hidden Power</p>
                    </div>
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