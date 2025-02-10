import { Landing_Nav } from "../components/Landing Page/Nav";

export function Landing() {

    const onDetails = () => {
        
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-screen bg-[url('assets/bg.png')] bg-cover bg-center">
                <div className="flex items-center justify-center backdrop-blur-sm w-full h-full text-white">
                    <Landing_Nav />
                </div>
            </div>

            <section className="w-full h-screen flex items-center justify-center px-4 text-center">
                <h1 className="w-full max-w-3xl text-lg sm:text-2xl md:text-3xl text-[#ffffff50] font-light">
                    <i>
                        "Explore how the world around us shapes our perception, how light, shadow, and expression reveal the unspoken.
                        A reflection of truth, emotion, and fleeting moments. This is <span className="text-white">Dramatique</span>, an endless gallery capturing the depths of <span className="text-white">feeling</span> through the lens."
                    </i>
                </h1>
            </section>

            <section className="flex flex-col sm:flex-row items-center justify-center w-full h-auto sm:h-screen gap-8 px-4">
                <div className="portrait-1 bg-white w-64 h-64 sm:w-[27em] sm:h-[27em] bg-[url('assets/portrait-1.png')] bg-center bg-cover"></div>
                <h1 className="text-[#ffffff50] w-full sm:w-[12em] text-2xl sm:text-4xl text-center">
                    Feel The Motion <span className="text-white font-medium">Captured</span> Through Breathtaking <span className="text-white font-medium">Moments</span>
                </h1>
                <div className="portrait-2 bg-white w-64 h-64 sm:w-[27em] sm:h-[27em] bg-[url('assets/portrait-2.png')] bg-center bg-cover"></div>
            </section>

            <section className="flex flex-col items-center justify-center w-full h-auto sm:h-screen p-4 sm:p-30 relative">
                <div className="flex flex-col sm:flex-row w-full max-w-5xl h-auto sm:h-full text-white gap-8 justify-center items-center sm:p-10">
                    <div className="w-full h-full">
                        <h1 className="text-4xl sm:text-7xl text-nowrap font-medium">Join Us</h1>
                    </div>
                    <div className="w-full flex flex-col gap-8">
                        <h1 className="text-xl sm:text-2xl text-[#ffffff80] w-full sm:w-[19em] font-light">
                            Become a Member of our amazing service here at Dramatique and show the world the power you have behind the lens
                        </h1>

                        {/* Inputs */}
                        <form onSubmit={onDetails} className="flex flex-col gap-4 sm:gap-10">
                            <input type="text" placeholder="Name" className="h-12 sm:h-18 border-b focus:outline-none" />
                            <input type="text" placeholder="Email" className="h-12 sm:h-18 border-b focus:outline-none" />
                            <input type="text" placeholder="Password" className="h-12 sm:h-18 border-b focus:outline-none" />
                        </form>

                        {/* Account Buttons */}
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <div className="flex gap-4 items-center">
                                <button className="border rounded-2xl px-4 py-2 sm:p-5 hover:-translate-y-1 transition ease-linear">
                                    Create Account
                                </button>
                                or
                                <button className="p-3 sm:p-5 px-6 sm:px-8 bg-amber-50 rounded-2xl hover:-translate-y-1 transition ease-linear">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                                        <path
                                            fill="#FFC107"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                </button>
                            </div>
                            <h1 className="text-[#ffffff50]">
                                Already have an account? <span className="text-[#605ff890]">Log in</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex absolute bottom-5 w-full items-center justify-center text-[#ffffff50] px-4">
                    <h1 className="text-xs sm:text-md">© 2025 Dramatique - A gallery of light, shadow, and emotion</h1>
                    <div className="flex items-center gap-4 sm:scale-75">
                        <h1 className="text-base sm:text-2xl">Socials</h1>
                        <button className="p-2 bg-stone-600 rounded-[1em] hover:-translate-y-1 transition ease-linear">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke="#ffffff50"
                                fill="none"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="..." />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
