import {ReactNode} from 'react';
import PokeList from "./PokeList";

export default function Layout({children}: any) {
    return (
        <div className="flex flex-col justify-between h-screen lg:flex-row-reverse lg:max-w-screen-xl m-auto bg-pokeball-cutoff bg-contain bg-no-repeat">
            <div className="flex flex-col justify-evenly h-screen">
                {children}
            </div>
            <div className="bg-blue-500 invisible h-1/4 lg:visible lg:h-screen lg:w-1/3">
                <PokeList />
            </div>
            
        </div>
    )
}