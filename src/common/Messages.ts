export namespace Messages {

    export namespace Channels {
        export const APP = "app"
        export const CHAT = "chat"
        export const MESSAGES = "messages"
        export const PROFILE = "profile"
        export const SETTINGS = "settings"
        export const SOCKET = "socket"
        export const UPDATER = "updater"
    }

    export namespace Commands {
        export namespace App {
            export const START = "start"
            export const IDENTIFIER = "identifier"
            export const OPEN = "open"
            export const QUIT = "quit"
        }

        export namespace Profile {
            export const READ = "read"
            export const SAVE = "save"
        }

        export namespace Settings {
            export const READ = "read"
            export const SAVE = "save"
        }

        export namespace Socket {
            export const CONNECT = "connect"
            export const CONNECTED = "connected"
            export const DISCONNECT = "disconnect"
            export const DISCONNECTED = "disconnected"
            export const TIMEOUT = "timeout"
        }

        export namespace Updater {
            export const INITIALIZE = "initialize"
            export const UPDATE_AVAILABLE = "update.available"
            export const UPDATE_NOT_AVAILABLE = "update.not.available"
            export const UPDATE_DOWNLOADED = "update.downloaded"
            export const ERROR = "error"
        }
    }
}
