import nights from '@/assets/images/30-noches.png';
import avengers from '@/assets/images/avengers.png';
import coco from '@/assets/images/coco.png';
import starWars from '@/assets/images/star wars.png';
import twd from '@/assets/images/TWD.png';
import wonder from '@/assets/images/wonder.png';
import Image from 'next/image';

function Movies() {
  return (
    <div id="musica" className="flex flex-col">
      <div className="flex flex-col gap-20">
        <h2 className="text-4xl font-medium mt-20">Películas 🎥</h2>
        <p className="text-lg">
          Soy de las personas que disfruta ir al cine para ver películas, pero también me gusta disfrutarlas tranqui en un sillón o cama, con algo para comer y tomar, puedo mirar cualquier género, desde las que te hacen llorar hasta las de terror, acá les dejo algunas que me gustan,
          <strong className="font-bold"> el dato ramdon es que me ví todas las películas de Star Wars y Marvel 🕷️</strong>
        </p>
        <div className="grid grid-cols-3 py-6 gap-10">
          <div className='h-60 w-52 rounded-md overflow-hidden'>
            <Image
              src={wonder}
              alt="Wonder"
              title="Wonder"
              className='object-cover'
            />
          </div>
          <div className='h-60 w-52 rounded-md overflow-hidden'>
            <Image
              src={avengers}
              alt="Avengers End Game"
              title="Avengers End Game"
              className='object-cover'
            />
          </div>
          <div className='h-60 w-52 rounded-md overflow-hidden'>
            <Image
              src={coco}
              alt="Coco"
              title="Coco"
              className='object-cover'
            />
          </div>
          <div className='h-60 w-52 rounded-md overflow-hidden'>
            <Image
              src={nights}
              alt="3O noches con mi Ex"
              title="3O noches con mi Ex"
              className='object-cover'
            />
          </div>
          <div className='h-60 w-52 rounded-md overflow-hidden'>
            <Image
              src={starWars}
              alt="Star Wars"
              title="Star Wars"
              className='object-cover'
            />
          </div>
          <div className='h-60 w-52 rounded-md overflow-hidden'>
            <Image
              src={twd}
              alt="The Walking Dead"
              title="The Walking Dead"
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies;
