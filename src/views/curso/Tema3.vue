<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Análisis del contexto nacional e institucional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Toda práctica pedagógica se desarrolla dentro de un marco normativo y un contexto institucional específico que orientan las decisiones y acciones en el aula. Comprender estos elementos permite diseñar e implementar propuestas didácticas que sean pertinentes, funcionales y alineadas con las necesidades reales de los niños.
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El contexto nacional está determinado por las políticas educativas, normativas y enfoques curriculares que rigen la educación infantil en el país. Mientras tanto, el contexto institucional responde a la identidad pedagógica del centro educativo, reflejada en su Proyecto Educativo Institucional (PEI), modelo pedagógico, principios y metodologías.
        p(data-aos="fade-left") Analizar estos niveles de contexto, es clave para garantizar que la propuesta didáctica no solo sea innovadora, sino también coherente con las directrices educativas y con la realidad del entorno en el que se implementa.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Relación entre el marco normativo nacional y el proyecto educativo institucional (PEI)
    
    p.mb-4 El diseño de una propuesta didáctica efectiva en educación infantil requiere coherencia con el marco normativo nacional y la identidad institucional establecida en el Proyecto Educativo Institucional (PEI).

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Relación entre el marco normativo nacional y el proyecto educativo institucional (PEI)
            p.mb-4(data-aos="fade-right") En el PDF <b>Relación entre el marco normativo nacional y el Proyecto Educativo Institucional</b>, se analiza cómo las políticas educativas colombianas orientan la enseñanza y cómo cada institución adapta estos lineamientos a su contexto particular. A través de este estudio, se enfatiza la importancia de articular la planeación pedagógica con las normativas vigentes y la filosofía institucional, garantizando así una enseñanza pertinente, inclusiva y alineada con los principios educativos del país.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Relación entre el marco normativo nacional y el proyecto educativo institucional (PEI).
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Influencia del modelo pedagógico de la institución, en el diseño e implementación de propuestas didácticas
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") ¿De qué manera el modelo pedagógico del centro de práctica determina la planificación y ejecución de una propuesta didáctica?
    
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Cada institución educativa adopta un modelo pedagógico que orienta su enseñanza, define su forma de concebir el aprendizaje y guía las estrategias implementadas en el aula. Este modelo no solo es un referente teórico, sino una herramienta práctica que incide directamente en la manera en que los niños experimentan su educación.
        p(data-aos="fade-left") Al diseñar e implementar una propuesta didáctica en el centro de práctica, es fundamental comprender y respetar este modelo, puesto que determina los enfoques metodológicos, las estrategias de enseñanza y los procesos de evaluación. La coherencia entre la propuesta didáctica y el modelo pedagógico, garantiza que las actividades planificadas sean significativas, pertinentes y alineadas con los principios de la institución.
    
    h2.mb-5(data-aos="fade-left") ¿Qué es un modelo pedagógico y por qué es clave en la educación infantil?

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Un modelo pedagógico es el conjunto de principios, estrategias y metodologías que definen cómo se enseña y cómo aprenden los estudiantes, dentro de una institución. 
        p(data-aos="fade-left") En educación infantil, estos modelos priorizan el desarrollo integral de los niños, enfatizando aspectos como el juego, la exploración, la interacción social y la construcción del conocimiento.
        p(data-aos="fade-left") Los modelos más comunes en educación infantil, incluyen: 

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="50%" y="12.5%" numero="+")
                h5 1. Modelo tradicional
                p Enfocado en la transmisión de conocimientos de manera estructurada. La enseñanza es dirigida por el docente y se basa en la repetición y memorización.
    
              .bg-color-white.box-shadow.p-3(x="30%" y="29%" numero="+")
                h5 2. Modelo activo o constructivista
                p Propone que el niño construye su propio aprendizaje a partir de la exploración, el juego y la experimentación. Ejemplos incluyen Montessori, Waldorf y Reggio Emilia.
    
              .bg-color-white.box-shadow.p-3(x="70%" y="29%" numero="+")
                h5 3. Modelo sociocultural
                p Basado en las ideas de Vygotsky, enfatiza la interacción social, el aprendizaje colaborativo y la mediación del adulto como guía en el proceso de desarrollo.
    
              .bg-color-white.box-shadow.p-3(x="25%" y="66%" numero="+")
                h5 4. Modelo por competencias
                p Se centra en el desarrollo de habilidades prácticas y la aplicación del conocimiento en situaciones reales.
    
              .bg-color-white.box-shadow.p-3(x="74.5%" y="66%" numero="+")
                h5 5. Modelo inclusivo
                p Prioriza la atención a la diversidad y la adaptación de estrategias pedagógicas, para garantizar la participación de todos los niños, sin importar sus necesidades particulares.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Cada institución educativa define su modelo pedagógico en el Proyecto Educativo Institucional (PEI), lo que implica que cualquier propuesta didáctica debe estar en consonancia con sus enfoques y metodologías.
    
    h2(data-aos="fade-left") Relación entre el modelo pedagógico y el diseño de la propuesta didáctica 
    p.mb-5 Al desarrollar una propuesta didáctica en el centro de práctica, es esencial considerar cómo el modelo pedagógico de la institución influye en su estructura y metodología. Esto se refleja en varios aspectos:

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Selección de estrategias didácticas")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Si el modelo es activo, se privilegiarán actividades exploratorias, basadas en el juego y el aprendizaje significativo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Si es por competencias, las actividades deben enfocarse en la resolución de problemas y la aplicación de conocimientos en contextos reales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Si la institución sigue un enfoque inclusivo, la planificación debe contemplar adaptaciones para niños con necesidades diversas.
    
          .div(titulo="Enfoque del rol docente")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 En un modelo constructivista, el docente es un mediador que guía el aprendizaje, permitiendo que los niños participen activamente.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 En un modelo más tradicional, el docente tiene un rol más directivo, estructurando el aprendizaje de manera secuencial.
    
          .div(titulo="Evaluación del aprendizaje")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 En modelos socioculturales, la evaluación es formativa y se centra en la observación y la documentación del proceso de aprendizaje.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 En modelos basados en competencias, se utilizan rúbricas e indicadores de desempeño para evaluar la aplicación del conocimiento.
    
          .div(titulo="Ejemplo práctico")
            p Si el centro de práctica trabaja bajo un modelo Reggio Emilia, la propuesta didáctica debe incluir espacios de exploración libre, materiales manipulativos y documentación del proceso de aprendizaje. Por otro lado, si la institución sigue un modelo Montessori, la planificación debe centrarse en la autonomía del niño, con materiales estructurados que fomenten el autoaprendizaje.
    
    h2(data-aos="fade-left") Implementación de la propuesta didáctica en coherencia con el modelo pedagógico
    p.mb-5 Para que la propuesta didáctica sea efectiva, debe reflejar el modelo pedagógico institucional en su ejecución. Algunas estrategias para lograrlo incluyen:

    .bg-full-width.bg-color-11.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-10
                    p.mb-0 <b>Observar y analizar la dinámica del aula</b> antes de diseñar la propuesta, identificando cómo el modelo pedagógico se refleja en la práctica diaria.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-10
                    p.mb-0 <b>Alinear los objetivos y actividades</b> con los principios pedagógicos de la institución, garantizando coherencia con el enfoque educativo del centro.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-10
                    p.mb-0 <b>Incluir estrategias inclusivas</b>, permitiendo la participación de todos los niños, independientemente de sus habilidades y estilos de aprendizaje.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-10
                    p.mb-0 <b>Reflexionar sobre la implementación</b>, evaluando si la propuesta se ajusta a la filosofía educativa del centro y qué ajustes pueden realizarse para mejorar su funcionalidad.
                h5 Reflexionemos:
                p Una propuesta didáctica no puede diseñarse de manera aislada, sino que debe responder a la identidad pedagógica de la institución.
                p Comprender el modelo pedagógico del centro de práctica, permite estructurar actividades que respeten su enfoque, optimicen los procesos de enseñanza-aprendizaje y garanticen una experiencia educativa enriquecedora para los niños. La clave está en diseñar propuestas flexibles, innovadoras y alineadas con la visión de la institución, asegurando así su pertinencia y funcionalidad.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema3/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Comparación entre los objetivos institucionales y los de la propuesta didáctica aplicada
    
    p.mb-4 La planificación de una propuesta didáctica en educación infantil debe estar en sintonía con los objetivos institucionales para garantizar una enseñanza coherente y efectiva.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Comparación entre los objetivos institucionales y los de la propuesta didáctica aplicada
            p.mb-4(data-aos="fade-right") En el PDF <b>Comparación entre los objetivos institucionales y los de la propuesta didáctica aplicada</b>, se analiza cómo los objetivos definidos en el Proyecto Educativo Institucional (PEI) orientan la práctica pedagógica y cómo estos pueden articularse con los propósitos específicos de una planeación en el aula. A través de este estudio, se destacan estrategias para evaluar la alineación entre ambos niveles de objetivos, asegurando que la enseñanza responda a la visión educativa del centro de práctica y a las necesidades particulares de los niños.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Comparación entre los objetivos institucionales y los de la propuesta didáctica aplicada.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/10.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.salvarojeducacion.com/2015/05/educar-con-sentido-y-coherencia.html " target="_blank" rel="noopener noreferrer") Educar con sentido y coherencia. (s.f.). El blog de Salvaroj. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.uninorte.edu.co/web/blogobservaeduca/blogs/-/blogs/concepciones-de-la-educacion-en-la-infancia " target="_blank" rel="noopener noreferrer") Concepciones de la educación en la infancia - Observatorio De Educación del Caribe Colombiano - Uninorte. (s.f.). Observatorio De Educación del Caribe Colombiano.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=". https://worldvisionamericalatina.org/educacion-inicial-importancia-en-el-desarrollo-infantil/ " target="_blank" rel="noopener noreferrer") Educación inicial: ¿Cuál es su importancia en el desarrollo infantil? (s.f.). World Vision América Latina. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=PhySv2RpgkQ " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2014, 1 de julio). La comunidad trabajando por una educación de calidad y pertinente. [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=s2aHj-cLVP4 " target="_blank" rel="noopener noreferrer") Universidad Pedagógica Nacional. (2013, 14 de noviembre). Encuentro de prácticas y saberes para la primera infancia. [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
