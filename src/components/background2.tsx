export const Background2 = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 p-8">
            <div className="sm:hidden md:block lg:block"></div>
            <div className="sm:hidden md:hidden lg:block"></div>
            <div className="my-24">
                <p className="sm:text-base md:text-lg lg:text-base">
                    Au fil de mes études, de mes projets et de cette première expérience, j'ai développé un large éventail 
                    de compétences en web et mobile. Ma curiosité insatiable, mon savoir-faire technique et mon adaptabilité
                    me permettent aujourd'hui de contribuer avec impact dans un environnement en constante évolution.
                </p>
            </div>
            <div className="md:hidden lg:block"></div>
            <div className="col-span-2">
                <div className="">
                    <img src="images/moss.png" className="h-20 w-20 mb-6 " alt="logo Moss SAS" />
                    <h4 className="sm:text-base md:text-2xl lg:text-2xl font-semibold">MOSS</h4>
                    <h1 className="mb-8 sm:font-medium sm:text-3xl md:text-5xl lg:text-5xl font-bold">Développeur Frontend</h1>
                    <h3 className="text-lg my-3">2023 - 2024 Issy-les-Moulineaux</h3>
                    <p className="sm:w-80 md:w-[50vw] lg:w-[30vw]">
                        J'ai contribué au développement d'interfaces homme-machine (IHM)
                        pour la visualisation et la saisie de données, optimisant l'expérience
                        utilisateur et la précision des entrées.
                    </p>
                </div>
            
                <div className="my-16">
                    <img src="images/side.png" className="h-20 w-20 mb-6" alt="logo Moss SAS" />
                    <h4 className="sm:text-base md:text-2xl lg:text-2xl font-semibold">SIDE</h4>
                    <h1 className="mb-8 sm:font-medium sm:text-3xl md:text-5xl lg:text-5xl font-bold">Intérimaire</h1>
                    <h3 className="text-lg my-3">2019 - 2021 Paris</h3>
                    <p className="sm:w-80 md:w-[50vw] lg:w-[30vw]">
                        J'ai réalisé diverses missions dans des secteurs variés, notamment dans
                        la logistique, le commerce, les services et la maintenance.
                    </p>
                    </div>
                </div>
            <div className=""></div>
        </div>
    )
}