import HugeBee from '../assets/huge-bee.svg';
import Bee from '../assets/bee.svg';

export const Hero = () => {
    return (
        <div className="relative max-w-full w-full h-72 md:h-120 bg-primary flex flex-col items-center justify-center overflow-hidden shadow-md">
            <h1 className="text-3xl md:text-8xl">APICULT&apos;EIRB</h1>
            <p className="text-md md:text-3xl text-center ">
                Association d&apos;étudiants apiculteurs de l&apos;Enseirb-Matmeca
            </p>

            <img src={Bee} alt="" className="pointer-events-none select-none absolute top-[30%] left-[20%] w-6 md:w-13 rotate-[12deg]" />
            <img src={Bee} alt="" className="pointer-events-none select-none absolute bottom-[22%] left-[15%] w-5 md:w-10 rotate-[75deg]" />
            <img src={Bee} alt="" className="pointer-events-none select-none absolute top-[22%] right-[27%] w-4 md:w-8 rotate-[-80deg]" />
            <img src={Bee} alt="" className="pointer-events-none select-none absolute bottom-[22%] right-[40%] w-5 md:w-10 rotate-[-15deg]" />
            <img src={Bee} alt="" className="pointer-events-none select-none absolute top-[58%] right-[17%] w-5 md:w-10 rotate-[80deg]" />

            <img src={HugeBee} alt="" className="pointer-events-none select-none absolute top-[40%] md:top-[45%] left-[7%] w-6 md:w-12 rotate-[-45deg]" />
            <img src={HugeBee} alt="" className="pointer-events-none select-none absolute bottom-[12%] left-2/5 w-6 md:w-12 rotate-[-16deg]" />
            <img src={HugeBee} alt="" className="pointer-events-none select-none absolute bottom-[10%] right-[8%] w-5 md:w-10 rotate-[18deg]" />
            <img src={HugeBee} alt="" className="pointer-events-none select-none absolute top-[10%] right-[12%] w-5 md:w-10 rotate-[45deg]" />
            <img src={HugeBee} alt="" className="pointer-events-none select-none absolute top-[14%] left-[42%] w-6 md:w-12 rotate-[25deg]" />
        </div>
    );
};