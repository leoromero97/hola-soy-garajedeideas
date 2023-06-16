import CardAboutValue from "@/components/CardAboutValue"

function AboutMe() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-20">
        <h1 className="text-6xl mt-20">Hola garajers 👋</h1>
        <p className="text-lg">Soy Leonardo Romero, tengo 26 años y vivo en el barrio de Villa Soldati, CABA. Me apasiona este mundo de la tecnología y las innovaciones que pueden ayudar a las personas, pero resumo algunas palabras que me representan, en las siguientes cards 👇️</p>
        <div className="grid grid-cols-3 py-6 gap-10">
          <CardAboutValue label="Emprendedor" href="https://repartear.com/" />
          <CardAboutValue label="Desarrollador Frontend" href="https://github.com/leoromero97" />
          <CardAboutValue label="Diseñador UI" href="https://www.behance.net/leonardogromero" />
          <CardAboutValue label="Jugador de equipo" />
          <CardAboutValue label="Motociclista" />
          <CardAboutValue label="Fernetero" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe