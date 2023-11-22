import Alpine from 'alpinejs'

Alpine.data('modal', () => ({
    open: false,

    toggleModal(el) {
        this.open ? el.close() : el.showModal()
        this.cleanup(el)
    },

    cleanup(el) {
        this.open = el.open
        this.toggleBackdropScrolling()
    },

    toggleBackdropScrolling() {
        if (this.open) {
            document.documentElement.style.scrollbarGutter = 'stable'
            document.documentElement.style.overflowY = 'hidden'
        } else {
            document.documentElement.style.scrollbarGutter = ''
            document.documentElement.style.overflowY = ''
        }
    }
}))

window.Alpine = Alpine

Alpine.start()
