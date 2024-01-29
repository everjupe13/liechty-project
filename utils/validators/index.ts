import { email, required } from '@vuelidate/validators'

export const requiredValidator = {
  message: (isEN: boolean) =>
    isEN ? 'Value is required' : 'Wert erforderlich',
  validator: required
}

export const emailValidator = {
  message: (isEN: boolean) =>
    isEN
      ? 'Value is not a valid email address'
      : 'Der Wert ist keine gültige E-Mail-Adresse',
  validator: email
}
