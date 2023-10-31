import { useModal } from 'vue-final-modal'

import PurchaseDetails from '../ui/PurchaseDetails.vue'

export const usePurchaseDetailsModal = () => {
  const { open, close } = useModal({
    component: PurchaseDetails,
    attrs: {
      onConfirm() {
        close()
      }
    }
  })

  return { open, close }
}
