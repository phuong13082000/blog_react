import {useState} from "react";
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import useDarkMode from "../hook/useDarkMode";

const ToggleDarkMode = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light');

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    }

    return (
        <div className="inline-block rounded-full bg-gray-200 p-1 align-middle text-gray-400 outline-none dark:bg-gray-800 dark:hover:text-white">
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={25}
            />
        </div>
    );
}

export default ToggleDarkMode
