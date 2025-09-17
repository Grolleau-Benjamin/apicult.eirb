interface Actu {
    date: string;
    title: string;
    content: string;
    images?: string[];
}

const actuList: Actu[] = [
    {
        date: "17 Septembre 2025",
        title: "Essaimage des ruches",
        content: `À la suite d’une forte pression de frelons, nos deux essaims ont choisi de quitter les ruches 🐝. L’un d’eux a pu être récupéré à proximité immédiate, mais le second est malheureusement perdu. 

Ce phénomène, bien que naturel dans la vie d’une colonie, marque la fin de la saison apicole pour cette année ❄️. Nos ruches resteront donc vides durant l’hiver, mais nous nous attendons à un retour dynamique des abeilles dès février 🌸.`,
        images: ["/posts/2025_09_17/1.jpg", "/posts/2025_09_17/2.jpg"],
    },
    {
        date: "Septembre 2025",
        title: "Récolte de l’Enseirb-Matmielca",
        content: `La récolte 2025 s’est faite le 7 septembre au matin, à peine 5 mois après l’installation des ruches 🐝. La veille, l’Abeille Talencaise était venue poser les chasses-abeilles, et dès le lendemain matin, 8h, on s’est retrouvés pour sortir les réhausses et les cadres en sécurité !

Bilan : en si peu de temps, nos abeilles ont produit 15 kg de miel 🍯 ! Principalement de l’acacia, avec sa couleur claire et sa douceur bien reconnaissable 🌸. Un pari un peu fou, mais une super surprise pour une toute première saison !`,
        images: ["/posts/2025_09/1.jpg", "/posts/2025_09/2.jpg", "/posts/2025_09/3.jpg"],
    },
    {
        date: "Avril 2025",
        title: "Installation des ruches",
        content: `En partenariat avec l’Abeille Talençaise 🐝, nous installons nos toutes premières ruches au sein de l’école, dans l’espace vert situé entre l’aile informatique et le CREL. Ce lieu a été choisi pour plusieurs raisons : visible depuis l’intérieur de l’école, mais à l’abri des regards extérieurs 👀 et au calme des élèves. De plus, il est facile d’accès pour l’entretien 🛠️.

Nos premières pensionnaires font donc leur arrivée courant avril et, sans perdre de temps, se mettent à l’œuvre ! Leur environnement proche est riche en parcs et en végétation 🌳. Elles trouvent donc rapidement un terrain de butinage idéal pour remplir les réhausses. Rendez-vous dans quelques mois pour la récolte 🍯 !`,
    },
];

function ActuItem({ date, title, content, images }: Actu) {
    return (
        <article className="space-y-3 md:space-y-0 md:grid md:grid-cols-[180px_20px_1fr] md:grid-rows-[auto_auto] md:gap-x-6 md:gap-y-4">
            <div className="md:hidden space-y-1">
                <div className="text-sm text-gray-700">[ {date} ]</div>
                <div className="flex items-center gap-3">
                    <span className="inline-block h-3 w-3 rounded-full bg-black" />
                    <div className="h-px flex-1 bg-black/50" />
                    <h2 className="text-base font-semibold leading-none">{title}</h2>
                </div>
            </div>

            <div className="hidden md:flex col-[1] row-[1] items-center justify-end pr-2">
                <span className="whitespace-nowrap text-lg text-gray-700">[ {date} ]</span>
            </div>
            <div className="hidden md:flex col-[2] row-[1] items-center justify-center">
                <span className="inline-block h-3.5 w-3.5 rounded-full bg-black" />
            </div>
            <div className="hidden md:flex col-[3] row-[1] items-center">
                <div className="h-px flex-1 bg-black/50 mr-4" />
                <h2 className="text-2xl font-semibold leading-none">{title}</h2>
            </div>

            <div className="md:col-[3] md:row-[2] text-sm md:text-base leading-relaxed text-gray-900 whitespace-pre-line text-justify">
                {content}
            </div>

            {/* Images */}
            <div className="md:col-[3]">
                {images && images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3 md:gap-4">
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Actu ${title} - ${index}`}
                                className="rounded-md h-28 md:h-40 object-cover"
                                loading="lazy"
                            />
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}

export const Actu = () => {
    return (
        <section id="actu" className="w-full">
            <div className="mx-auto w-full px-4 py-8 md:py-12 md:max-w-5xl space-y-12">
                <h1 className="text-2xl md:text-4xl">L&apos;actualité 🐝</h1>
                <div className="space-y-12 md:space-y-16">
                    {actuList.map((a, i) => (
                        <ActuItem key={i} {...a} />
                    ))}
                </div>
            </div>
        </section>
    );
};
