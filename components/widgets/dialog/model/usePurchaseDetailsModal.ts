import { ref, watch } from 'vue'
import { useModal } from 'vue-final-modal'

import PurchaseDetails from '../ui/PurchaseDetails.vue'

export const usePurchaseDetailsModal = () => {
  const drawerOpened = ref(false)
  const setFalse = () => (drawerOpened.value = false)
  const setTrue = () => (drawerOpened.value = true)

  watch(drawerOpened, () => {
    const html = document.querySelector('html')
    const body = document.querySelector('body')

    if (drawerOpened.value) {
      html?.style.setProperty('overflow', 'hidden')
      html?.style.setProperty('padding-right', '8px')
      body?.style.setProperty('pointer-events', 'none')
    } else {
      html?.style.removeProperty('overflow')
      html?.style.removeProperty('padding-right')
      body?.style.removeProperty('pointer-events')
    }
  })

  const { open: openModal, close: closeModal } = useModal({
    component: PurchaseDetails,
    attrs: {
      onConfirm: () => confirmModalMenu(),
      onClosed: () => closeModalMenu(),
      onClose: () => closeModalMenu()
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
    navigateTo('/')
  }

  return { open: openModalMenu, close: closeModalMenu }
}
