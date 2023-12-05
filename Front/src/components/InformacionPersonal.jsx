import yo from '../img/yoEdit.png'

const InformacionPersonal = () => {
  return (
    <section className="border-2 rounded-xl m-5 bg-white border-green-500 ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">

            <h1 
            className="mb-10 text-4xl font-extrabold tracking-tight md:text-4xl lg:text-4xl text-gray-900 "
            >
                Elaborado por:
                <span className='text-cyan-800'> Raúl May</span>
            </h1>
            <p className='mb-6 text-lg font-normal  lg:text-xl text-gray-500 dark:text-gray-400'>
                Estudiante de la Universidad Tecnológica de Cancún <br />
                Practicante con las tecnologías NodeJs y ReactJs
            </p>
            <img src={yo} alt="yo" className="w-44 h-48 mx-auto object-cover rounded-full md:rounded-full"/>
        </div>
    </div>
</section>
  )
}

export default InformacionPersonal