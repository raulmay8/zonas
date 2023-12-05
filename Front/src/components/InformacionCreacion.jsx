

const InformacionCreacion = () => {
    return (
  <section className="border-2 rounded-xl m-5 bg-white border-green-500 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
  
              <h1 
              className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-4xl text-gray-900 "
              >
                  Lenguajes y librerías usadas
              </h1>
              <div className='flex flex-col-2 justify-around'>
  
              
              <div 
              className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              >
              <h2 className="mb-2 text-2xl font-semibold text-gray-900">
                  Backend:
              </h2>
                  <ul>
                      <li>MySql</li>
                      <li>NodeJS</li>
                      <li>ExpressJS</li>
                      <li>NodeJS</li>
                  </ul>
              </div>
              <div
              className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
              >
              <h2 className="mb-2 text-2xl font-semibold text-gray-900">
                  Frontend:
              </h2>
                  <ul>
                      <li>ReactJs</li>
                      <li>Vite</li>
                      <li>TailwindCss</li>
                      <li>React Router Dom</li>
                      <li>Material Tailwind</li>
                      <li>Axios</li>
                      <li>Sequelize</li>
                      <li>React Icons</li>
                  </ul>
              </div>
              </div>
          </div>
      </div>
  </section>
  
    )
  }
  
  export default InformacionCreacion