import { RouterLinkProps } from 'vue-router'

export type NavMenuItemType = {
  toLink: RouterLinkProps['to']
  label: string
}
