import Logo from '../assets/logos/x256/apiculteirb.png';
import SchoolLogo from '../assets/logos/bdx_inp_black.png';

export const Footer = () => {
    return (
        <footer className="w-full bg-primary py-6">
            <div className="mx-auto flex flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:gap-0 max-w-4xl">
                <div className="flex gap-4 sm:gap-6 items-center">
                    <img
                        src={Logo}
                        alt="Logo Apicult'eirb"
                        className="h-8 w-8 sm:h-10 sm:w-10 rounded-md object-contain"
                    />
                    <img
                        src={SchoolLogo}
                        alt="Logo Bordeaux INP"
                        className="h-8 sm:h-10 object-contain"
                    />
                </div>
                <div className="text-xs sm:text-sm text-gray-900 text-center sm:text-right">
                    &copy; {new Date().getFullYear()} Apicult&apos;eirb. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};