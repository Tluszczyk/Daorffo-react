import { useState } from "react"

const MIN_LEVEL = 1;
const MAX_LEVEL = 2;

export const useLevel = () => {
    const [level, setLevel] = useState(MIN_LEVEL);
    return {
        incLevel() { setLevel( Math.min(MAX_LEVEL, level+1) ) },
        decLevel() { setLevel( Math.max(MIN_LEVEL, level-1) ) },
        setLevel(newLevel: number) { setLevel( Math.max(MIN_LEVEL, Math.min(MAX_LEVEL, newLevel)) ) },
        getLevel() { return level }
    }
}