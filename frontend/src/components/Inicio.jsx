import React   from 'react';
import sol from '../img/soluciones.png'
import sol1 from '../img/soluciones1.jpg'
import sol2 from '../img/soluciones2.jpg'

function Inicio() {
  return (
    <>
      <div>
        <h1>SOPORTE TÉCNICO Y MANTENIMIENTO DE EQUIPOS INFORMATICOS</h1>
      </div>
      <div className='cont_inicio'>
          <div>
            <p className='parla'>
            <strong>¿Buscas Soluciones Confiables para tus Equipos Informáticos?</strong>
            <br></br>
            En el mundo de los negocios modernos, la tecnología es la columna vertebral que impulsa el éxito y la eficiencia. En ByteSaversCampus entendemos que un solo fallo en tu infraestructura informática puede tener un impacto significativo en la productividad y la rentabilidad de tu negocio.
            <br></br>
            Somos tu socio de confianza en el ámbito del soporte técnico y mantenimiento de equipos informáticos. Nuestra misión es brindarte la tranquilidad de saber que tus sistemas están en manos expertas, permitiéndote concentrarte en lo que realmente importa: hacer crecer tu negocio.
            <br></br>
            <br></br>
            <strong>¿Por qué elegir a ByteSaversCampus?</strong>
            <br></br>
            Experiencia y Profesionalismo: Contamos con un equipo altamente capacitado de expertos en tecnología que tienen años de experiencia en el campo. Sabemos cómo hacer que tu infraestructura informática funcione de manera eficiente y sin problemas.
            <br></br>
            Servicio Personalizado: Entendemos que cada negocio es único. Por lo tanto, personalizamos nuestros servicios de acuerdo a tus necesidades específicas. Ya sea que seas una pequeña empresa o una corporación, estamos listos para ayudarte.
            <br></br>
            Respuesta Rápida: Sabemos lo valioso que es tu tiempo. Nuestra respuesta rápida y eficaz asegura que los problemas se resuelvan de manera oportuna para minimizar el tiempo de inactividad.
            <br></br>
            Mantenimiento Preventivo: No esperamos a que surjan problemas. Implementamos estrategias de mantenimiento preventivo para evitar problemas antes de que ocurran, ahorrándote tiempo y dinero.
            <br></br>
            Precios Competitivos: Ofrecemos tarifas competitivas sin comprometer la calidad. Obtendrás un excelente servicio a un precio que se ajusta a tu presupuesto.
            <br></br>
            Atención 24/7: Los problemas informáticos no siempre ocurren durante el horario laboral. Estamos disponibles las 24 horas del día, los 7 días de la semana, para brindarte el soporte que necesitas cuando más lo necesitas.
            <br></br>
            En ByteSaversCampus, somos apasionados por mantener tus sistemas informáticos funcionando sin problemas. Ya sea que necesites asistencia con la reparación de hardware, la optimización de redes, la seguridad de datos o cualquier otro servicio relacionado con la tecnología, estamos aquí para ayudarte.
            <br></br>
            Deja que nosotros nos encarguemos de la tecnología para que tú puedas concentrarte en hacer crecer tu negocio. ¡Contáctanos hoy mismo y descubre cómo podemos ser tu aliado tecnológico confiable!

            </p>
          </div>
          <div className='img_sol'>
            <img className='imgs_inicio' src={sol} alt='soluciones'></img>
            <img className='imgs_inicio' src={sol1} alt='soluciones1'></img>
            <img className='imgs_inicio' src={sol2} alt='soluciones2'></img>
          </div>
      </div>
    </>
  );
}

export default Inicio;
