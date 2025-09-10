export default function HomeSection() {
    return (
        <section id="home" className="pt-18 md:pt-24 flex gap-4 md:gap-6 lg:gap-8 xl:gap-18 flex-col justify-end">
            <div className="flex flex-col gap-3">
                <p className="font-semibold text-lg md:text-xl px-1 w-max text-almost-black">Hi! I'm Dimas Ramdani</p>
                <p className="text-3xl md:text-5xl lg:text-[76px] xl:text-8xl font-semibold text-gray-800 capitalize max-w-[1200px]">Building websites that deliver impactful <span className="text-[#b6bcc6]">digital experiences</span></p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.5fr] lg:grid-cols-2 items-center">
                <div className="flex gap-2 order-2 md:order-1">
                    <a href="#contact" className="w-full md:w-max bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-md md:text-lg text-white px-6 py-2 md:py-3 rounded-full flex items-center justify-center gap-1">
                        <span>Lets Talk</span>
                        <svg className="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <p className="ms-auto text-gray-600 text-md lg:text-lg order-1 md:order-2">A web developer creating websites that not only function flawlessly but also provide value and a seamless experience for users.</p>
            </div>
        </section>
    )
}