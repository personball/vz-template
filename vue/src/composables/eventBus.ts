import mitt from 'mitt'

// keep one instance
const emitter = mitt()

export function useEventBus() {

    return emitter
}