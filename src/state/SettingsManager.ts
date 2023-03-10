import {Messages} from "../common/Messages";
import {References} from "../References";
import {Event, EventSubscription, SubscriptionManager} from "../SubscriptionManager";

export type Settings = {
    autoReconnect: boolean,
    whisperTab: boolean,
    separateBots: boolean
    ignoreEmotes: boolean,
    ignoreAntiIdles: boolean,
    ignoreBots: boolean,
    ignoreBans: boolean
}

export class SettingsManager {

    private defaultSettings = {
        autoReconnect: true,
        whisperTab: true,
        separateBots: true,
        ignoreEmotes: false,
        ignoreAntiIdles: false,
        ignoreBots: false,
        ignoreBans: false
    }
    private settings: Settings = this.defaultSettings

    private subscriptions: SubscriptionManager = new SubscriptionManager()
    public subscribe<A> (event: Event, a: EventSubscription<A>) {
        this.subscriptions.addSubscription(event, a)
    }

    public initialize() {
        this.listen()
    }

    public getSettings() {
        return {...this.defaultSettings, ...this.settings}
    }

    public setSettings(newSettings: Settings) {
        this.settings = newSettings
        References.messageBus.send(
            Messages.Channels.SETTINGS,
            Messages.Commands.Settings.SAVE,
            this.settings
        )
        this.subscriptions.dispatch("settings", this.getSettings())
    }

    private listen() {
        References.messageBus.on(Messages.Channels.SETTINGS, (command, data) => {
            switch (command) {
                case Messages.Commands.Settings.READ:
                    this.settings = data as Settings
                    this.subscriptions.dispatch("settings", this.getSettings())
                    break
            }
        })
        References.messageBus.send(
            Messages.Channels.SETTINGS,
            Messages.Commands.Settings.READ
        )
    }
}
