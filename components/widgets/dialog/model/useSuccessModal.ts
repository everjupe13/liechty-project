import { ref, watch } from 'vue'
import { useModal } from 'vue-final-modal'

import FeedbackSuccess from '../ui/FeedbackSuccess.vue'

export const useSuccessModal = () => {
  const drawerOpened = ref(false)
  const setFalse = () => (drawerOpened.value = false)
  const setTrue = () => (drawerOpened.value = true)

  watch(drawerOpened, () => {
    const html = document.querySelector('html')

    if (drawerOpened.value) {
      html?.style.setProperty('overflow', 'hidden')
      html?.style.setProperty('padding-right', '8px')
    } else {
      html?.style.removeProperty('overflow')
      html?.style.removeProperty('padding-right')
    }
  })

  const { open: openModal, close: closeModal } = useModal({
    component: FeedbackSuccess,
    attrs: {
      onConfirm: () => confirmModalMenu(),
      onClosed: () => closeModalMenu()
    }
  })

  const openModalMenu = () => {
    setTrue()
    openModal()
  }

  const closeModalMenu = () => {
    setFalse()
    closeModal()
  }

  const confirmModalMenu = () => {
    closeModalMenu()
  }

  return { open: openModalMenu, close: closeModalMenu }
}
