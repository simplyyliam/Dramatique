
import { NavLink } from "react-router-dom";



export function Landing_Nav () {


    return (
        <div className="flex flex-wrap gap-4 justify-center lg:gap-38 md:gap-8 md:justify-start">
        <NavLink to='' className="flex flex-col items-center">
            <h1 className="text-base md:text-xl">Light & Shadow</h1>
        </NavLink>
        <NavLink to='' className="flex flex-col items-center">
            <h1 className="text-base md:text-xl">Gaze & Gesture</h1>
        </NavLink>
        <NavLink to='' className="flex flex-col items-center">
            <h1 className="text-base md:text-xl">Ephemeral</h1>
        </NavLink>
        <NavLink to='' className="flex flex-col items-center">
            <h1 className="text-base md:text-xl">Echo & Void</h1>
        </NavLink>
        <NavLink to='' className="flex flex-col items-center">
            <h1 className="text-base md:text-xl">Stillness & Motion</h1>
        </NavLink>
    </div>
    )
}