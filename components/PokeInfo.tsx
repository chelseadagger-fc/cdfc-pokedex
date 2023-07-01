// import { getPokeData } from '../lib/pokeData';
import Image from 'next/image';

type pokeData = {
    name: string,
    id: number,
    height: number,
    weight: number,
    types: string
}  

function capitalize(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

export default function PokeInfo(pokeData: pokeData) {
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';

    return (
        <>
            <div className="my-5 mx-3">
                <div className="flex flex-row justify-evenly">
                    <div className="flex flex-col justify-center items-center grow">
                        <h1 className="text-5xl">{(pokeData.name).toUpperCase()}</h1>
                        <h2 className="text-2xl mt-2 mr-2">#{pokeData.id}</h2>
                        <div className="mt-3 text-xl p-2 border-black border-2 rounded-lg">
                            <p>{(pokeData.types).toUpperCase()}</p>
                        </div>
                    </div>
                    <div className="relative h-64 w-64 lg:h-80 lg:w-80">
                        <Image 
                            src={url + pokeData.id + '.gif'}
                            fill={true}
                            alt={"Image of " + pokeData.name} />
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center text-2xl mt-8">
                    <div className="flex flex-col items-center px-12 py-2">
                        <p className="text-3xl px-10 py-3 rounded-xl bg-slate-100">{pokeData.height / 10}m</p>
                        <p className="text-base mt-2">Height</p>
                    </div>
                    <div className="flex flex-col items-center px-12 py-2">
                        <p className="text-3xl px-10 py-3 rounded-xl bg-slate-100">{pokeData.weight / 10}kg</p>
                        <p className="text-base mt-2">Weight</p>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center text-2xl mt-8">
                    <div className="flex flex-col items-center px-12 py-2">
                        <p className="text-3xl px-10 py-3 rounded-xl bg-slate-100">{pokeData.height / 10}m</p>
                        <p className="text-base mt-2">Height</p>
                    </div>
                    <div className="flex flex-col items-center px-12 py-2">
                        <p className="text-3xl px-10 py-3 rounded-xl bg-slate-100">{pokeData.weight / 10}kg</p>
                        <p className="text-base mt-2">Weight</p>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center text-2xl mt-8">
                    <div className="flex flex-col items-center px-12 py-2">
                        <p className="text-3xl px-10 py-3 rounded-xl bg-slate-100">{pokeData.height / 10}m</p>
                        <p className="text-base mt-2">Height</p>
                    </div>
                    <div className="flex flex-col items-center px-12 py-2">
                        <p className="text-3xl px-10 py-3 rounded-xl bg-slate-100">{pokeData.weight / 10}kg</p>
                        <p className="text-base mt-2">Weight</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}