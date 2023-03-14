import { useState } from "react"

export const useLevel = (() => {
    const [level, setLevel] = useState(0);
    return {
        incLevel() { setLevel(level+1) },
        decLevel() { setLevel(level-1) },
        setLevel(newLevel: number) { setLevel(newLevel) },
        getLevel() { return level }
    }
})