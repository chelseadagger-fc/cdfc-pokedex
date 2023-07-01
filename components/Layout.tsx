import {ReactNode} from 'react';
import PokeList from "./PokeList";

export default function Layout({children}: any) {
    return (
        <div className="flex flex-col justify-between h-screen lg:flex-row-reverse lg:max-w-screen-xl m-auto">
            <div className="bg-green-500 grow">
                {children}
            </div>
            <div className="bg-blue-500 h-1/4 lg:h-screen lg:w-1/3">
                <PokeList />
            </div>
            
        </div>
    )
}