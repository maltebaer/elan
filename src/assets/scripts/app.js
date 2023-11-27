import Alpine from 'alpinejs'

Alpine.data('modal', () => ({
    openModal(el) {
        el.showModal()
        this.preventBackdropScrolling()
    },

    closeModal(el) {
        el.close()
        this.clearScrollStyles()
    },

    preventBackdropScrolling() {
        document.documentElement.style.scrollbarGutter = 'stable'
        document.documentElement.style.overflowY = 'hidden'
    },

    clearScrollStyles() {
        document.documentElement.style.scrollbarGutter = ''
        document.documentElement.style.overflowY = ''
    }
}))

window.Alpine = Alpine

Alpine.start()
