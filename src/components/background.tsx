export const Background = ({ textColor }: { textColor: string }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 p-8 pt-40">
        <div className="md:hidden lg:block"></div>
        <div className="stroke-text">
          <p className="xs:text-4xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
            style={{
              WebkitTextStroke: `1px ${textColor}`,
              color: "transparent",
            }}
          >
              Voir au <br />
              delà des<br />
              limites. <br />
            </p>
        </div>
        <div className=""></div>

        <div className="sm:hidden md:hidden lg:block"></div>
        <div className="sm:hidden md:block lg:block"></div>
        <div className="my-40">
          <p className="sm:text-base md:text-lg lg:text-base ">
            Après un Bac Pro en électrotechnique, j'ai décidé de me réorienter vers l'informatique
            en intégrant un BTS SIO, option Solutions d'Infrastructure, Systèmes et Réseaux (SISR). 
            N'étant pas particulièrement passionné par cette spécialité, j'ai arrêté après la première 
            année et commencé à travailler tout en me formant en autonomie. J'ai d'abord exploré le
            développement web, puis le développement d'applications mobiles, en suivant des cours intensifs 
            sur YouTube et Udemy.
          </p>
        </div>
        <div className="md:hidden lg:block"></div>
        <div className="">
          <p className="sm:text-base md:text-lg lg:text-base">
            En 2022, à 26 ans, j'ai rejoint la Web@cadémie by Epitech pour suivre une formation de deux ans 
            en intégration et développement web, visant un titre RNCP de niveau 5 (équivalent Bac+2). Durant 
            la première année, j'ai travaillé sur plusieurs projets web et mobiles, aussi bien en groupe qu'en solo. 
            En deuxième année, en alternance, j'ai acquis ma première expérience professionnelle en tant que développeur 
            frontend, grâce à une année d'apprentissage en entreprise.
          </p>
        </div>      
    </div>
  )
}