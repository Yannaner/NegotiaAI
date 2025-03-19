/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RETELL_API_KEY: string
  readonly VITE_TWILIO_FROM_NUMBER: string
  readonly VITE_USER_PHONE_NUMBER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
