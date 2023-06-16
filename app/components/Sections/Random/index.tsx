import codeando from '@/assets/images/codeando.jpeg';
import futbol from '@/assets/images/futbol.jpeg';
import gala from '@/assets/images/gala.jpeg';
import infobae from '@/assets/images/infobae.jpeg';
import mariaVidal from '@/assets/images/maria eugenia vidal.jpeg';
import speaker from '@/assets/images/speaker.jpeg';
import Image from 'next/image';

function Random() {
  return (
    <div id="musica" className="flex flex-col">
      <div className="flex flex-col gap-20">
        <h2 className="text-4xl font-medium mt-20">Galegría random 📸</h2>
        <div className="grid grid-cols-3 space-y-2 py-6 gap-10">
          <div className='rounded-md overflow-hidden col-span-1 row-span-1'>
            <Image
              src={gala}
              alt="Gala"
              title="Gala"
              className='object-cover rounded-md hover:scale-150 transition-all delay-300'
            />
          </div>

          <div className='rounded-md overflow-hidden col-span-2 row-span-1'>
            <Image
              src={speaker}
              alt="Speaker en ICO"
              title="Speaker en ICO"
              className='object-cover rounded-md hover:scale-150 transition-all delay-300'
            />
          </div>
          <div className='rounded-md overflow-hidden col-span-1 row-span-2'>
            <Image
              src={infobae}
              alt="Infobae"
              title="Infobae"
              className='object-cover rounded-md hover:scale-150 transition-all delay-300'
            />
          </div>
          <div className='rounded-md overflow-hidden col-span-2 row-span-2'>
            <Image
              src={futbol}
              alt="Partido de futbol en Yupanqui"
              title="Partido de futbol en Yupanqui"
              className='object-cover rounded-md hover:scale-150 transition-all delay-300'
            />
          </div>


          <div className='rounded-md overflow-hidden'>
            <Image
              src={codeando}
              alt="Codeando"
              title="Codeando"
              className='object-cover rounded-md hover:scale-150 transition-all delay-300'
            />
          </div>

          <div className='rounded-md overflow-hidden col-span-2 row-span-3'>
            <Image
              src={mariaVidal}
              alt="The Walking Dead"
              title="The Walking Dead"
              className='object-cover rounded-md hover:scale-150 transition-all delay-300'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Random;
