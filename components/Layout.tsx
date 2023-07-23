import {ReactNode} from 'react';
import PokeList from "./PokeList";

export default function Layout({children}: any) {
    return (
        <div className="flex flex-col justify-between h-screen w-screen bg-zinc-200 lg:flex-row-reverse lg:max-w-screen-xl m-auto">
            <div className="flex flex-col justify-evenly h-screen bg-right-top bg-pokeball-cutoff-mobile bg-no-repeat lg:bg-pokeball-cutoff">
                {children}
            </div>
            <div className="bg-blue-500 invisible h-8 lg:visible lg:h-screen lg:w-1/3">
                <PokeList />
            </div>
        </div>
    )
}