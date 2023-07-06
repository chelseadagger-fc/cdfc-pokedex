/* eslint-disable @next/next/no-img-element */

type pokeData = {
    name: string,
    id: number,
    height: number,
    weight: number,
    type0: string,
    type1?: string,
    ability0: string,
    ability1?: string,
    statHP: string,
    statAtk: string,
    statDef: string,
    statSpAtk: string,
    statSpDef: string,
    statSpd: string,
    gender: number,
    growthRate: string,
    dexEntry: string,
    evoData : {
        species: {
            name: string,
            url: string
        },
        evolves_to: {
            species: {
                name: string,
                url: string
            },
            evolution_details: {
                min_level: number,
                trigger: {
                    name: string
                }
            },
            evolves_to: {
                species: {
                    name: string,
                    url: string
                },
                evolution_details: {
                    min_level: number,
                    trigger: {
                        name: string
                    }
                }
            }
        }
    }
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

    const secondType = (pokeData.type1 !== undefined ? (
        <div className={`${pokeData.type1} flex items-center justify-center mt-3 text-sm p-1 w-20 rounded-lg`}>
            <p>{(pokeData.type1).toUpperCase()}</p>
        </div> 
    ) : null )

    const secondAbility = (pokeData.ability1 !== undefined ? (
        <div className="flex flex-col items-center py-2">
            <p className="text-xl w-40 h-12 py-2 text-center rounded-3xl bg-slate-300/75">{pretty(pokeData.ability1)}</p>
        </div>
    ) : null )

    const genderRateF = (pokeData.gender / 8) * 100;
    const genderRateM = 100 - genderRateF;
    let genderRatioWidth = '';
    let genderRatioColor = 'water';
    switch (pokeData.gender) {
        case -1:
            genderRatioWidth = 'invisible';
            genderRatioColor = 'bg-slate-300/75';
            break;
        case 0:
            genderRatioWidth = 'invisible';
            break;
        case 1:
            genderRatioWidth = 'w-1/6';
            break;
        case 2: 
            genderRatioWidth = 'w-1/4';
            break;
        case 3:
            genderRatioWidth = 'w-2/6';
            break;
        case 4:
            genderRatioWidth = 'w-1/2';
            break;
        case 5:
            genderRatioWidth = 'w-4/6';
            break;
        case 6:
            genderRatioWidth = 'w-3/4';
            break;
        case 7:
            genderRatioWidth = 'w-5/6';
            break;
        case 8:
            genderRatioWidth = 'w-full';
            break;
    }

    const displayGenderText = (pokeData.gender === -1 ? (
        <p>Unknown</p>
    ) : <p className="text-xs">{genderRateF}% <span className="font-bold">♀</span> | {genderRateM}% <span className="font-bold">♂</span></p> ) 
    
    const displayGenderRatio = (pokeData.gender === -1 ? null :
        <div className={`w-32 h-3 ${genderRatioColor} rounded-3xl mb-1 opacity-60`}>
            <div className={`fairy h-3 ${genderRatioWidth} rounded-l-3xl`}></div>
        </div>
    )


    const totalStats = pokeData.statHP + pokeData.statAtk + pokeData.statDef + pokeData.statSpAtk + pokeData.statSpDef + pokeData.statSpd;

    return (
        <div className="flex flex-col my-2 mx-3">
            <div className="flex flex-row justify-evenly items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold">{(pokeData.name).toUpperCase()}</h1>
                    <h2 className="text-xl mt-2 pr-3">#{pokeData.id}</h2>
                    <div className="flex flex-row gap-x-2">
                        <div className={`${pokeData.type0} flex items-center justify-center mt-3 text-sm p-1 w-20 rounded-lg`}>
                            <p>{(pokeData.type0).toUpperCase()}</p>
                        </div>
                        {secondType}
                    </div>
                </div>
                <div className="relative ml-4 lg:h-80 lg:w-80 mb-5 ">
                    <img
                        className="object-contain w-40 h-40"
                        src={pokeData.id <= 649 ? (urlGen5 + pokeData.id + '.gif') : (urlGen6 + pokeData.id + '.png')}
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
                        <p className="text-xl w-40 h-12 py-2 text-center rounded-3xl bg-slate-300/75">{pokeData.height / 10}m</p>
                        <p className="text-xs font-bold mt-1 text-stone-500">Height</p>
                    </div>
                    <div className="flex flex-col items-center py-2">
                        <p className="text-xl w-40 h-12 py-2 text-center rounded-3xl bg-slate-300/75">{pokeData.weight / 10}kg</p>
                        <p className="text-xs font-bold mt-1 text-stone-500">Weight</p>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly items-center text-2xl mt-4">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col justify-center items-center text-xl w-40 h-12 py-2 text-center rounded-3xl bg-slate-300/75 py-2">
                            {displayGenderRatio}
                            {displayGenderText}
                        </div>
                        <p className="text-xs font-bold mt-1 text-stone-500">Gender</p>
                    </div>
                    <div className="flex flex-col items-center py-2">
                        <p className="text-xl w-40 h-12 py-2 text-center rounded-3xl bg-slate-300/75">{pretty(pokeData.growthRate)}</p>
                        <p className="text-xs font-bold mt-1 text-stone-500">Growth Rate</p>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex flex-row justify-evenly">
                        <div className="flex flex-col items-center py-2">
                            <p className="text-xl w-40 h-12 py-2 text-center rounded-3xl bg-slate-300/75">{pretty(pokeData.ability0)}</p>
                            {pokeData.ability1 === undefined ? <p className="text-xs font-bold mt-1 text-stone-500">┗  Ability  ┛</p> : null}
                        </div>
                        {secondAbility}
                    </div>
                    {pokeData.ability1 !== undefined ? <p className="text-xs font-bold text-center text-stone-500">┗━━━━━━  Abilities  ━━━━━━┛</p> : null}
                </div>
                <div className="flex flex-col w-auto">
                    <div className="mt-4">
                        <div className="flex flex-row justify-evenly text-sm">
                            <div className="flex flex-col justify-between bg-slate-300/75 rounded-3xl h-20 p-2">
                                <div className="fighting rounded-full flex justify-center items-center w-8 h-8 text-xs text-center">{pokeData.statHP}</div>
                                <p className="text-center">HP</p>
                            </div>
                            <div className="flex flex-col justify-between bg-slate-300/75 rounded-3xl h-20 p-2">
                                <div className="fire rounded-full flex justify-center items-center w-8 h-8 text-xs text-center">{pokeData.statAtk}</div>
                                <p className="text-center">ATK</p>
                            </div>
                            <div className="flex flex-col justify-between bg-slate-300/75 rounded-3xl h-20 p-2">
                                <div className="electric rounded-full flex justify-center items-center w-8 h-8 text-xs text-center">{pokeData.statDef}</div>
                                <p className="text-center">DEF</p>
                            </div>
                            <div className="flex flex-col justify-between bg-slate-300/75 rounded-3xl h-20 p-2">
                                <div className="flying rounded-full flex justify-center items-center w-8 h-8 text-xs text-center">{pokeData.statSpAtk}</div>
                                <p className="text-center">SpA</p>
                            </div>
                            <div className="flex flex-col justify-between bg-slate-300/75 rounded-3xl h-20 p-2">
                                <div className="grass rounded-full flex justify-center items-center w-8 h-8 text-xs text-center">{pokeData.statSpDef}</div>
                                <p className="text-center">SpD</p>
                            </div>
                            <div className="flex flex-col justify-between bg-slate-300/75 rounded-3xl h-20 p-2">
                                <div className="fairy rounded-full flex justify-center items-center w-8 h-8 text-xs text-center">{pokeData.statSpd}</div>
                                <p className="text-center">SPD</p>
                            </div>
                            <div className="flex flex-col justify-between bg-slate-300/75 rounded-3xl h-20 p-2">
                                <div className="water rounded-full flex justify-center items-center w-8 h-8 text-xs text-center font-bold">{totalStats}</div>
                                <p className="text-center font-bold">TOT</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs font-bold text-center text-stone-500 mt-3">┗━━━━━━━  Stats  ━━━━━━━┛</p>
                </div>
                <div className="flex flex-col mt-4">
                    <div>
                        <h1>evolution details</h1>
                    </div>
                    <p className="text-xs font-bold text-center text-stone-500">┗━━━━━━  Evolution  ━━━━━━┛</p>
                </div>
                {/* <div className="invisible lg:visible flex flex-row justify-evenly items-center text-2xl mt-4">
                    <h1>(invisible on mobile; visible on desktop)</h1>
                </div> */}
            </div>
        </div>
    )
}