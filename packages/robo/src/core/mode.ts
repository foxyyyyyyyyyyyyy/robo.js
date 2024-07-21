import { color } from './color.js'
import { logger } from './logger.js'
import { fork } from 'node:child_process'

let _mode = 'production'
let _modeColor: (typeof color)[0]

interface SetModeOptions {
	cliCommand?: 'dev' | 'start'
}

/**
 * Internal
 */
export function getModeColor(mode: string) {
	const Colors = [color.blue, color.cyan, color.red, color.yellow, color.green, color.magenta]
	const hash = mode.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)

	return Colors[hash % Colors.length]
}

/**
 * Internal
 */
export function setMode(mode: string, options?: SetModeOptions) {
	const { cliCommand } = options ?? {}
	_mode = mode

	if (!mode && process.env.NODE_ENV) {
		_mode = process.env.NODE_ENV
	} else if (!mode && cliCommand === 'dev') {
		_mode = 'development'
	} else if (!mode && cliCommand === 'start') {
		_mode = 'production'
	}

	// See if there's multiple modes in this (e.g. "dev, beta")
	const modes =
		_mode
			?.split(',')
			?.flatMap((m) => m.split(' '))
			?.filter(Boolean) ?? []
	logger.debug(`Setting mode(s) to`, modes)

	// If there's multiple modes, return a way to shard
	let shardModes = null

	if (modes.length > 1) {
		const longestMode = modes.reduce((a, b) => (a.length > b.length ? a : b))

		shardModes = () => {
			// When multiple modes are provided, we need to shard the process
			modes.forEach((mode) => {
				const args = process.argv.slice(2)
				// Update args to remove all other mode flags
				// e.g. `[ 'start', '--mode', 'sexy,', 'catgirl', '-v' ]` => `[ 'start', '--mode', 'sexy', '-v' ]`
				const newArgs: string[] = []
				let ignoreArgs = false

				args.forEach((arg) => {
					if (ignoreArgs && arg.startsWith('-')) {
						ignoreArgs = false
					} else if (ignoreArgs) {
						return
					}

					newArgs.push(arg)
					if (arg === '--mode') {
						newArgs.push(arg, mode)
						ignoreArgs = true
					}
				})

				// Launch a new process with the new args
				const child = fork(process.argv[1], newArgs, {
					env: {
						...process.env,
						ROBO_SHARD_MODE: mode,
						ROBO_SHARD_MODES: modes.join(','),
						ROBO_SHARD_LONGEST_MODE: longestMode
					}
				})

				child.on('exit', (code) => {
					logger.debug(`Child process exited with code ${code}`)
				})
			})
		}
	}

	return { shardModes }
}

export const Mode = Object.freeze({ color: colorMode, get, is })

/**
 * Returns the color function for the current mode.
 * This is used to colorize logs based on the mode when multiple exist.
 */
export function colorMode(text: string) {
	if (!_modeColor) {
		_modeColor = getModeColor(_mode)
	}

	return _modeColor(text)
}

/**
 * The current mode this Robo instance is running in.
 * This is set by the `--mode` CLI flag.
 *
 * Defaults to `production` for `robo start` and `development` for `robo dev`.
 */
function get() {
	return _mode
}

/**
 * Checks if the current mode matches the provided mode.
 * 
 * @param mode The mode to check against.
 * @returns `true` if the current mode matches the provided mode.
 */
function is(mode: string) {
	return _mode === mode
}