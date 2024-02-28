import { useState } from "react"

export const useLevel = (() => {
    const [level, setLevel] = useState(0);
    return {
        incLevel() { setLevel( Math.min(2, level+1) ) },
        decLevel() { setLevel( Math.max(0, level-1) ) },
        setLevel(newLevel: number) { setLevel(newLevel) },
        getLevel() { return level }
    }
})