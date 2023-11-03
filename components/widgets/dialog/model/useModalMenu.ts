import { useModal } from 'vue-final-modal'

import ModalMenu from '../ui/ModalMenu.vue'

export const useModalMenu = () => {
  const { open: openModalMenu, close: closeModalMenu } = useModal({
    component: ModalMenu,
    attrs: {
      onConfirm() {
        close()
      }
    }
  })

  return {
    openModalMenu,
    closeModalMenu
  }
}
