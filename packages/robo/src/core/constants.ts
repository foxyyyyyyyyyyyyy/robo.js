import type { Config } from '../types/index.js'

export const ALLOWED_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx']

export const DEFAULT_CONFIG: Config = {
	clientOptions: null,
	heartbeat: {
		interval: 5 * 1000,
		url: null
	},
	sage: {
		defer: true,
		deferBuffer: 250,
		ephemeral: false,
		errorReplies: true
	},
	timeouts: {
		commandRegistration: 3 * 1000,
		lifecycle: 5 * 1000
	}
}

export const FLASHCORE_KEYS = {
	commandRegisterError: '__robo_command_register_error',
	lastUpdateCheck: '__robo_last_update_check',
	state: '__robo_state'
}

export const STATE_KEYS = {
	restart: '__robo_restart'
}

// Timer symbols
export const BUFFER = Symbol('BUFFER')
export const TIMEOUT = Symbol('TIMEOUT')
