import './App.css'
import Testimonio from './Componentes/Testimonio';

import './App.css';

function App() {
  const users = [
    {
      nombre:'Shawn Wang',
      pais:'Singapur',
      imagen:'testimonio1',
      cargo:'Ingeniero de software',
      empresa:'Amazon',
            testimonio:'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'        
    },
    {
      nombre:'Sara Chima',
      pais:'Nigeria',
      imagen:'testimonio2',
      cargo:'Ingeniero de software',
      empresa:'ChatDesk',
      testimonio:'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble' 
    },
    {
      nombre:'Emma Bostian',
      pais:'Suecia',
      imagen:'testimonio3',
      cargo:'Ingeniero de software',
      empresa:'Spotify',
      testimonio:'Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify'
    }
  ];
  return (
    <div className="App">
        <div className='contenedor-main'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
        </h1>
{
  users.map((user,index)=>{
    return( <Testimonio
      key={index}
      nombre={user.nombre}
      pais={user.pais}
      imagen={user.imagen}
      cargo={user.cargo}
      empresa={user.empresa}
      testimonio={user.testimonio}
    />)
  })
}
      
      
    </div>
      </div>
 
  );
}

export default App;
