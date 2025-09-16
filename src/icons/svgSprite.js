import svgSpriteString from 'virtual:svg-sprite'


export default {
  install(vue) {
    vue.component('IconSvg', defineAsyncComponent(() => import('../components/IconSvg.vue')))
    
    const sprite = new DOMParser().parseFromString(svgSpriteString, 'image/svg+xml').documentElement

    document.body.appendChild(sprite)
  }
}
