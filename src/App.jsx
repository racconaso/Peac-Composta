import { useState } from 'react'

const verdes = [
  'Cáscaras de frutas y verduras',
  'Restos de café y filtros de papel',
  'Bolsas de té (sin grapas)',
  'Césped y hojas verdes recién cortadas',
  'Cáscaras de huevo trituradas',
]

const cafes = [
  'Hojas secas',
  'Cartón y papel sin tinta brillante',
  'Ramas pequeñas y aserrín',
  'Paja',
  'Servilletas de papel limpias',
]

const noCompostar = [
  'Carne, pescado y huesos',
  'Lácteos y grasas o aceites',
  'Heces de perros y gatos',
  'Plásticos, vidrio y metales',
  'Plantas enfermas',
]

const pasos = [
  {
    titulo: 'Elige el lugar',
    texto:
      'Busca un espacio con sombra parcial y buen drenaje. Puede ser un bote con orificios, un cajón de madera o un montón directamente sobre la tierra.',
  },
  {
    titulo: 'Haz la primera capa',
    texto:
      'Coloca una base de ramas pequeñas o material café para que circule el aire y escurra el exceso de agua.',
  },
  {
    titulo: 'Alterna materiales',
    texto:
      'Agrega capas de materiales verdes y cafés. Una buena regla es usar más o menos el doble de café que de verde.',
  },
  {
    titulo: 'Mantén la humedad',
    texto:
      'La mezcla debe sentirse como una esponja exprimida: húmeda, pero sin gotear. Si está seca, agrega agua; si está empapada, agrega material café.',
  },
  {
    titulo: 'Voltea y espera',
    texto:
      'Revuelve cada una o dos semanas para oxigenar. En 2 a 6 meses tendrás una tierra oscura que huele a bosque: tu composta está lista.',
  },
]

const beneficios = [
  {
    titulo: 'Menos basura',
    texto:
      'Casi la mitad de los residuos de un hogar son orgánicos. Al compostarlos, el bote de basura se llena mucho más despacio.',
  },
  {
    titulo: 'Menos contaminación',
    texto:
      'En un relleno sanitario, los residuos orgánicos generan metano, un gas de efecto invernadero. En la composta se descomponen con oxígeno y casi no lo producen.',
  },
  {
    titulo: 'Suelo más sano',
    texto:
      'La composta aporta nutrientes, retiene agua y mejora la estructura de la tierra, reduciendo la necesidad de fertilizantes químicos.',
  },
]

const preguntas = [
  {
    q: '¿Huele mal?',
    a: 'Una composta bien cuidada huele a tierra húmeda. El mal olor casi siempre indica exceso de humedad o de material verde; se corrige agregando material café y revolviendo.',
  },
  {
    q: '¿Atrae animales o plagas?',
    a: 'Si evitas carne, lácteos y grasas, y entierras los restos frescos bajo material café, es poco probable. Tapar el recipiente también ayuda.',
  },
  {
    q: '¿Puedo hacerla en un departamento?',
    a: 'Sí. Existen composteras de cubeta, y la lombricomposta (con lombrices rojas) funciona muy bien en espacios pequeños.',
  },
  {
    q: '¿Cuánto tarda?',
    a: 'Depende del clima, del tamaño y de qué tan seguido la revuelvas. En condiciones favorables puede estar lista en 2 a 3 meses.',
  },
]

function Lista({ items, clase }) {
  return (
    <ul className={`lista ${clase}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Pregunta({ q, a }) {
  const [abierta, setAbierta] = useState(false)
  return (
    <div className={`faq ${abierta ? 'abierta' : ''}`}>
      <button
        type="button"
        className="faq-q"
        aria-expanded={abierta}
        onClick={() => setAbierta(!abierta)}
      >
        <span>{q}</span>
        <span className="faq-icono" aria-hidden="true">
          {abierta ? '−' : '+'}
        </span>
      </button>
      {abierta && <p className="faq-a">{a}</p>}
    </div>
  )
}

export default function App() {
  return (
    <>
      <header className="hero">
        <div className="contenedor">
          <p className="etiqueta">PAEC · Investigación</p>
          <h1>¿Qué es una composta?</h1>
          <p className="intro">
            Es una forma natural de convertir restos de comida y jardín en
            tierra fértil. En lugar de tirarlos a la basura, los dejamos
            descomponerse para devolverle nutrientes al suelo.
          </p>
          <nav className="menu" aria-label="Secciones">
            <a href="#definicion">Definición</a>
            <a href="#materiales">Materiales</a>
            <a href="#pasos">Cómo hacerla</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="definicion" className="contenedor seccion">
          <h2>La idea en pocas palabras</h2>
          <p>
            La <strong>composta</strong> es el material oscuro, suave y con
            olor a tierra que resulta de la descomposición controlada de
            residuos orgánicos. A este proceso se le llama{' '}
            <strong>compostaje</strong>.
          </p>
          <p>
            Lo realizan millones de microorganismos (bacterias y hongos) y
            pequeños animales como lombrices e insectos. Para trabajar bien
            necesitan cuatro cosas:
          </p>
          <div className="tarjetas cuatro">
            <div className="tarjeta">
              <span className="emoji" aria-hidden="true">🍂</span>
              <h3>Materia orgánica</h3>
              <p>Su alimento.</p>
            </div>
            <div className="tarjeta">
              <span className="emoji" aria-hidden="true">💧</span>
              <h3>Humedad</h3>
              <p>Como una esponja exprimida.</p>
            </div>
            <div className="tarjeta">
              <span className="emoji" aria-hidden="true">🌬️</span>
              <h3>Aire</h3>
              <p>Oxígeno para respirar.</p>
            </div>
            <div className="tarjeta">
              <span className="emoji" aria-hidden="true">🌡️</span>
              <h3>Calor</h3>
              <p>Ellos mismos lo generan al trabajar.</p>
            </div>
          </div>
        </section>

        <section id="materiales" className="banda">
          <div className="contenedor seccion">
            <h2>¿Qué se puede compostar?</h2>
            <p>
              Una buena composta combina dos tipos de materiales: los{' '}
              <strong>verdes</strong>, ricos en nitrógeno y húmedos, y los{' '}
              <strong>cafés</strong>, ricos en carbono y secos.
            </p>
            <div className="tarjetas tres">
              <div className="caja verde">
                <h3>Verdes</h3>
                <Lista items={verdes} clase="ok" />
              </div>
              <div className="caja cafe">
                <h3>Cafés</h3>
                <Lista items={cafes} clase="ok" />
              </div>
              <div className="caja rojo">
                <h3>No agregar</h3>
                <Lista items={noCompostar} clase="no" />
              </div>
            </div>
          </div>
        </section>

        <section id="pasos" className="contenedor seccion">
          <h2>Cómo hacer una composta</h2>
          <ol className="pasos">
            {pasos.map((p, i) => (
              <li key={p.titulo}>
                <span className="numero">{i + 1}</span>
                <div>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="beneficios" className="banda">
          <div className="contenedor seccion">
            <h2>¿Por qué importa?</h2>
            <div className="tarjetas tres">
              {beneficios.map((b) => (
                <div className="tarjeta" key={b.titulo}>
                  <h3>{b.titulo}</h3>
                  <p>{b.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="preguntas" className="contenedor seccion">
          <h2>Preguntas frecuentes</h2>
          {preguntas.map((p) => (
            <Pregunta key={p.q} {...p} />
          ))}
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor">
          <p>Proyecto PAEC · Hecho con Vite y React · Hecho por el equipo 10</p>
        </div>
      </footer>
    </>
  )
}
