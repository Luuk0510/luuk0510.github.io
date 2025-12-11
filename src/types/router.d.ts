import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    index?: number
    title?: string
    enterClass?: string
    leaveClass?: string
  }
}
