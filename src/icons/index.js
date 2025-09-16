
const svgFiles = import.meta.glob('@/icons/svg/*.svg', { query: '?raw' })

export default {
  getNameList() {
    const nameList = Object.keys(svgFiles).map(i => {
      return i.replace(/.*icon-(.*)\.svg/, '$1')
    })
    return nameList
  }
}
