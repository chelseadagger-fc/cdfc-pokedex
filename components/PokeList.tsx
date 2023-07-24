'use client'

import React, { useCallback } from 'react';
import Search from './Search'

export default function PokeList() {
    
    const [isExpanded, setIsExpanded] = React.useState(false);
    const toggleIsExpanded = useCallback(() => {
        setIsExpanded((isExpanded) => !isExpanded);
    }, []);
    
    return (
        <div className="flex flex-col-reverse h-full lg:h-screen lg:flex-col lg:justify-start">
            <div className="bg-zinc-400">
                <Search />
            </div>
        </div>
    )
}
