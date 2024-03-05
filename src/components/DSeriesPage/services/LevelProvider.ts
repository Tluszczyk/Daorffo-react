import { useState } from "react"

export const useLevel = ((minLevel: number, maxLevel: number) => {
    const [level, setLevel] = useState(minLevel);
    return {
        incLevel() { setLevel( Math.min(maxLevel, level+1) ) },
        decLevel() { setLevel( Math.max(minLevel, level-1) ) },
        setLevel(newLevel: number) { setLevel(newLevel) },
        getLevel() { return level }
    }
})