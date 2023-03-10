export type MessageSubscription = (...args: unknown[]) => void

export interface MessageBus {
    on(channel: string, callback: MessageSubscription): void
    send(channel: string, ...args: unknown[]): void

    onLocal(channel: string, callback: MessageSubscription): void
    sendLocal(channel: string, ...args: unknown[]): void
}
