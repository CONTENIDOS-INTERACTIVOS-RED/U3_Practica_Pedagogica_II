<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Título tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Subtítulo tema

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
