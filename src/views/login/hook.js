
import  React, { useEffect, useCallback, useLayoutEffect, useMemo, useReducer, useRef,useState, memo} from 'react';
const usehook =  () => {
    const [timer, setTimer] = useState();
    useEffect(() => {
        console.log('A')
        setTimeout(() => {
            setTimer(323, 434)
        }, 500)
    }, [])
}

export default usehook;