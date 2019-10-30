import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('pin');
    const body = document.querySelector('body');

    useEffect(() => {
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [darkMode])
   
    return [darkMode, setDarkMode]
}

export default useDarkMode
