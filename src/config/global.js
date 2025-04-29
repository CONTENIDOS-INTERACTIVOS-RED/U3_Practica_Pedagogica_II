export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Pertinencia y funcionalidad de la propuesta didáctica',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Introducción a la pertinencia y funcionalidad de la propuesta didáctica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Importancia de la coherencia entre teoría y práctica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Relación de la propuesta didáctica con el contexto educativo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Coherencia y pertinencia de la propuesta didáctica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Definición de pertinencia y funcionalidad en la educación infantil',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Elementos claves para garantizar la alineación con el contexto institucional',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Evaluación de la coherencia entre los principios pedagógicos de la institución y la propuesta didáctica aplicada',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis del contexto nacional e institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Relación entre el marco normativo nacional y el proyecto educativo institucional (PEI)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Influencia del modelo pedagógico de la institución, en el diseño e implementación de propuestas didácticas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Comparación entre los objetivos institucionales y los de la propuesta didáctica aplicada',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Evaluación y funcionalidad de la propuesta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Análisis de los resultados obtenidos: logros, dificultades y oportunidades de mejora',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Reflexión sobre la efectividad de la propuesta y posibles ajustes para su optimización',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Marcelo, C. & Vaillant, D. (2016). El ABC y D de la formación docente: ( ed.). Narcea Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/46228 ',
    },
    {
      referencia:
        'Matute, E. & Romo Beltrán, R. M. (Coord.). (2000). Diversas perspectivas sobre la formación docente: ( ed.). Universidad de Guadalajara. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/73426 ',
    },
    {
      referencia:
        'García Rodríguez, M. L. Sánchez Sánchez, M. D. R. & Marenco, D. E. (2016). Disfrutar aprendiendo: propuestas didácticas imaginativas para la enseñanza inicial: ( ed.). Ediciones Octaedro, S.L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/118679 ',
    },
    {
      referencia:
        'Osorio Villegas, M. & Herrera Púa, M. (2013). Educación Preescolar en Colombia: estructura del currículo y modelo pedagógico-didáctico: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69915 ',
    },
    {
      referencia:
        'Castro, E. (2006). La práctica pedagógica y el desarrollo de estrategias instruccionales desde el enfoque constructivista. Revista de Ciencias Sociales Vol. 12 (3), 2006: ( ed.). Red Universidad del Zulia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/17232',
    },
    {
      referencia:
        'Buey, M. L. D. (2010). Educación inclusiva. REOP-Revista española de orientación y psicopedagogía, 21(2), 358-366. ',
      link: 'https://revistas.uned.es/index.php/reop/article/view/11538 ',
    },
    {
      referencia:
        'Ainscow, M. (2002). Guía para la elaboración de la propuesta pedagógica. ',
      link:
        'https://stecyl.net/wp-content/uploads/2022/09/Guia-para-la-elaboracion-de-la-Propuesta-Pedagogica-Educacion-Infantil.pdf ',
    },
    {
      referencia:
        'Díaz Jaime, K., Jaime Ojea, R. A., & Céspedes Acuña, E. (2023). Estudio didáctico del aprendizaje pertinente en la formación inicial de los profesionales de la educación. EduSol, 23(82), 29-40. ',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S1729-80912023000100029&script=sci_arttext ',
    },
    {
      referencia:
        'Camacho, I. U. A. J. (2015). PEI Proyecto Educativo Institucional. ',
      link: 'https://repositorio.uniajc.edu.co/handle/uniajc/1474',
    },
    {
      referencia:
        'Ramírez, A. (2018). Una propuesta didáctica para la enseñanza del pensamiento aleatorio bajo el modelo escuela activa urbana. ',
      link: 'https://repositorio.unal.edu.co/handle/unal/68647 ',
    },
    {
      referencia: 'DE LA PRESTACION, D. S. E. DECRETO 1860 DE 1994. ',
      link:
        'https://www.mineducacion.gov.co/portal/ejes-tematicos/Normas-sobre-Educacion-Preescolar-Basica-y-Media/86240:Decreto-1860-de-Agosto-3-de-1994 ',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje significativo',
      significado:
        'Proceso en el cual el estudiante relaciona los nuevos conocimientos con sus experiencias previas, facilitando la comprensión y retención de la información.',
    },
    {
      termino: 'Coherencia pedagógica',
      significado:
        'Relación lógica y estructurada entre los objetivos, metodologías y evaluación en una propuesta didáctica.',
    },
    {
      termino: 'Contexto educativo',
      significado:
        'Conjunto de factores sociales, culturales y organizativos que influyen en el proceso de enseñanza-aprendizaje.',
    },
    {
      termino: 'Evaluación formativa',
      significado:
        'Proceso continuo que permite valorar el aprendizaje y realizar ajustes para mejorar la enseñanza.',
    },
    {
      termino: 'Funcionalidad didáctica',
      significado:
        'Capacidad de una estrategia o material educativo para cumplir con su propósito de enseñanza de manera efectiva.',
    },
    {
      termino: 'Horizonte institucional',
      significado:
        'Directrices, principios y objetivos que orientan el quehacer educativo de una institución.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Enfoque pedagógico que busca garantizar el acceso, permanencia y éxito escolar de todos los estudiantes, sin distinción.',
    },
    {
      termino: 'Instrumentos de evaluación',
      significado:
        'Herramientas utilizadas para medir el desempeño y los aprendizajes de los estudiantes.',
    },
    {
      termino: 'Modelo pedagógico',
      significado:
        'Enfoque teórico y metodológico que guía la enseñanza en una institución educativa.',
    },
    {
      termino: 'Normativa educativa',
      significado:
        'Conjunto de leyes, decretos y regulaciones que rigen el sistema educativo en un país.',
    },
    {
      termino: 'Pertinencia didáctica',
      significado:
        'Grado en que una estrategia de enseñanza responde a las necesidades y características del contexto educativo.',
    },
    {
      termino: 'Planeación didáctica',
      significado:
        'Organización de los objetivos, contenidos y actividades de enseñanza con base en un enfoque pedagógico.',
    },
    {
      termino: 'Propuesta didáctica',
      significado:
        'Conjunto de estrategias y recursos diseñados para facilitar el aprendizaje en un contexto específico.',
    },
    {
      termino: 'Proyecto Educativo Institucional (PEI)',
      significado:
        'Documento que define la identidad, misión y visión de una institución educativa.',
    },
    {
      termino: 'Reflexión pedagógica',
      significado:
        'Proceso de análisis crítico sobre la enseñanza y su impacto en el aprendizaje.',
    },
  ],
}
