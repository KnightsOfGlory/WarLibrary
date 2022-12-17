import {MessageBus} from "./MessageBus";
import {SettingsManager} from "./state/SettingsManager";
import {ProfileManager} from "./state/ProfileManager";
import {AppManager} from "./state/AppManager";
import {ConnectionManager} from "./state/ConnectionManager";
import {UserManager} from "./state/UserManager";
import {ChannelManager} from "./state/ChannelManager";
import {ChatManager} from "./state/ChatManager";

export namespace References {

    export let messageBus: MessageBus

    export let settingsManager: SettingsManager
    export let profileManager: ProfileManager
    export let appManager: AppManager

    export let connectionManager: ConnectionManager
    export let userManager: UserManager
    export let channelManager: ChannelManager
    export let chatManager: ChatManager
}
