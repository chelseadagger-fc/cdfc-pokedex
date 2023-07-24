import Search from './Search'

export default function PokeList() {
    return (
        <div className="flex flex-col-reverse h-full lg:h-screen lg:flex-col lg:justify-start">
            <div className="bg-zinc-400">
                <Search />
            </div>
            {/* <div className="h-full">
                <h1>PokeList</h1>
            </div> */}
        </div>
    )
}
