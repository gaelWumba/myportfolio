export const About = ({ textColor }: { textColor: string }) => {
    return (
        <div className="h-full grid lg:grid-cols-3 md:grid-cols-2 p-8 pt-40">
          <div className="md:hidden lg:block"></div>
          <div className="stroke-text">
            <p className="xs:text-4xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
              style={{
                WebkitTextStroke: `1px ${textColor}`,
                color: "transparent",
              }}
            >
              Progresser<br />
              chaque<br />
              jour. <br />
            </p>
          </div>
          <div className=""></div>
          <div className="sm:hidden md:hidden lg:block"></div>

          <div className="sm:hidden md:block lg:block"></div>
          <div className="my-40">
            <p className="sm:text-base md:text-lg lg:text-base">
            Basé en région parisienne, je travaille sur divers projets mobiles et web, aussi bien personnels que scolaires. 
            J'aime concevoir des applications mobiles attractives et agréables à utiliser. Étudiant en troisième année de bachelor, 
            je suis à la recherche d'un poste en alternance pour valider mon année scolaire. Passionné par les jeux vidéo, 
            les films, ainsi que les sports comme le basket, le tennis et le football américain, je trouve souvent de l'inspiration 
            dans ces univers pour mes projets.
            </p>
          </div>
      </div>
    )
}