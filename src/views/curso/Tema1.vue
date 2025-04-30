<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a la pertinencia y funcionalidad de la propuesta didáctica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En esta unidad, se reflexionará sobre cómo una propuesta didáctica se relaciona con el contexto institucional en el que fue implementada. Se analizará si existe coherencia entre los principios del Proyecto Educativo Institucional (PEI), los objetivos planteados en la propuesta y los resultados obtenidos.
        p(data-aos="fade-left") El propósito es argumentar con claridad la pertinencia y funcionalidad de la propuesta, identificando sus aciertos y oportunidades de mejora, dentro del marco institucional.
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Importancia de la coherencia entre teoría y práctica
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") ¿De qué sirve conocer múltiples enfoques pedagógicos si, al momento de aplicarlos, parecen no encajar con la realidad del aula?
    
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          p.mb-0 Según Marcelo y Vaillant (2016), este dilema es recurrente en la formación docente. A lo largo del proceso académico, se exploran diversas teorías del aprendizaje, metodologías didácticas y enfoques pedagógicos diseñados para transformar la enseñanza. 

        p(data-aos="fade-left") No obstante, al enfrentarse a la realidad del aula, suelen surgir interrogantes sobre su aplicabilidad y efectividad, en contextos educativos concretos.
        h5 Aquí es donde entra en juego la coherencia entre teoría y práctica, un aspecto fundamental para garantizar que lo aprendido en la formación docente, se traduzca en estrategias efectivas dentro del contexto educativo.
    
    h2(data-aos="fade-left") ¿Qué implica la coherencia entre teoría y práctica?a
    p.mb-5 Ser coherente entre lo que se aprende y lo que se aplica, significa que las estrategias, metodologías y recursos utilizados en la enseñanza no son improvisados, sino que responden a un marco teórico sólido y bien fundamentado. Para ello, es clave considerar los siguientes aspectos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Conexión con las necesidades del contexto
              p La teoría no es un conjunto de ideas abstractas, sino una herramienta para comprender la realidad educativa y actuar sobre ella. Por ello, es esencial adaptar los principios teóricos a las condiciones específicas del aula.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Reflexión constante
              p La enseñanza no es un proceso mecánico; requiere de análisis y ajustes continuos. Un docente en formación debe preguntarse constantemente: ¿Cómo se está aplicando lo aprendido? ¿Qué dificultades se presentan? ¿Cómo se pueden mejorar las estrategias?
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Sustento pedagógico en la práctica
              p No se trata solo de aplicar estrategias porque "funcionan", sino de comprender <b>por qué</b> funcionan. Cada decisión pedagógica debe tener un fundamento teórico que la respalde y una razón clara para su implementación.
      
    p.mb-4 ¿Por qué es tan importante esta coherencia?

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Evita la improvisación en la enseñanza")
            p Cuando la práctica no está respaldada por un marco teórico, el proceso de enseñanza-aprendizaje se vuelve arbitrario y poco estructurado, lo que puede afectar la calidad educativa.
    
          .div(titulo="Permite la innovación fundamentada")
            p La teoría proporciona bases para la creatividad en el aula. Un docente que conoce diferentes enfoques pedagógicos puede adaptar y combinar estrategias, según las necesidades de los estudiantes.
    
          .div(titulo="Fortalece la identidad profesional")
            p La enseñanza no se basa solo en la experiencia personal, sino en un conocimiento sólido sobre cómo aprenden los niños y qué estrategias pueden potenciar su desarrollo.
    
          .div(titulo="Contribuye a la mejora continua")
            p La educación es un campo en constante evolución. La coherencia entre teoría y práctica, permite a los docentes evaluar su propia labor y hacer ajustes informados para mejorar su enseñanza.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          h5 Reflexionemos:
          p.mb-0 En el ejercicio docente, no basta con conocer la teoría ni con acumular experiencia práctica, de manera aislada. La clave está en la articulación entre ambas dimensiones, garantizando que cada estrategia aplicada tenga un propósito claro y un sustento pedagógico sólido (Matute y Romo, 2000).
        p(data-aos="fade-left") <b>Entonces, la pregunta clave es:</b> ¿Cómo lograr que la propuesta didáctica implementada refleje, tanto la teoría estudiada como las necesidades del aula?

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Relación de la propuesta didáctica con el contexto educativo
    
    p.mb-4 La relación entre la propuesta didáctica y el contexto educativo es un factor clave para garantizar que las estrategias de enseñanza sean efectivas, pertinentes y funcionales dentro del entorno institucional.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Relación de la propuesta didáctica con el contexto educativo
            p.mb-4(data-aos="fade-right") En el PDF <b>Relación de la propuesta didáctica con el contexto educativo</b>, se analiza cómo evaluar la coherencia entre la planificación pedagógica y los principios del Proyecto Educativo Institucional (PEI), el modelo pedagógico de la institución y las características del grupo de estudiantes. Además, se abordan criterios como la disponibilidad de recursos, las condiciones del centro educativo y el contexto sociocultural de los niños, asegurando que la propuesta implementada responda a las necesidades reales del aula y promueva aprendizajes significativos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Relación de la propuesta didáctica con el contexto educativo.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/9.png', alt='')
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8
        h5 Reflexionemos:
        p(data-aos="fade-left") En la Unidad 2 se aprendió a estructurar y aplicar una propuesta didáctica. Ahora, en la Unidad 3, se debe evaluar si realmente fue pertinente y funcional, dentro del contexto del centro de práctica.
    
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Diseñar y aplicar una propuesta es solo el primer paso. Su verdadero impacto se mide en su capacidad de ajustarse al entorno educativo y responder a las necesidades reales de los estudiantes y la institución.
        p(data-aos="fade-left") En este punto, se inicia un análisis crítico: ¿la propuesta implementada cumplió con las expectativas del centro de práctica?, ¿qué aspectos pueden mejorarse para futuras experiencias en el aula?


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/218470 " target="_blank" rel="noopener noreferrer") Hinojo Lucena, F. J. & Arias Romero, S. (2021). Innovación e investigación educativa para la formación docente: (1 ed.). Dykinson. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/221583 " target="_blank" rel="noopener noreferrer") López Díaz, R. A. (2019). Modelos pedagógicos y formación docente: apuntes de clase para su comprensión y resignificaciones en el aula y en las instituciones educativas: (1 ed.). Universidad de La Salle - Ediciones Unisalle. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/248122 " target="_blank" rel="noopener noreferrer") García Fernández, J. A. (Coord.) & Moreno Herrero, I. (Coord.). (2014). Escuela, diversidad cultural e inclusión: (1 ed.). Los libros de la Catarata. 
             
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=xgp6QxE68uc" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2021, 15 de mayo). Conversatorio con docentes de educación preescolar, básica, media y superior. [Video]. YouTube. 
            
             
            

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
