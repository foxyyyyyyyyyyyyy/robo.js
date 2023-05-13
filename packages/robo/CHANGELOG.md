# robo.js

## 0.5.2

### Patch Changes

- 8fd0f67: feat: accept custom client in robo start options
- 6ce14ec: feat(cli): include build type in manifest

## 0.5.1

### Patch Changes

- c80d247: fix: export primary robo object
- 5749b9d: feat: introducing states (experimental)
- 12284fa: refactor: wait for child process to be ready in development mode
- 5a89c11: feat: await state load before robo start

## 0.5.0

### Minor Changes

- 9698694: feat(cli): watched plugin builds now also trigger robo restarts
- 540ce7c: feat(cli): --watch flag for continuously building plugins
- 6069ddd: feat: manifest scopes/permissions & inherit from plugins
- 6233208: feat: new automatic "dev" command when running in development mode
- 4f59425: refactor: reduced package size by 28% by replacing chokidar with node-watch

### Patch Changes

- 07db24e: fix: complete command result type
- 2efb113: fix(cli): no longer crashes when trying to build an empty plugin directory
- 8af3e9d: fix: stringify objects when printing log messages
- 9d0635f: refactor(cli): stricter child process termination when restarting
- d0652d4: fix(cli): "build plugin" command now finds options correctly
- 5b32c3a: chore(cli): no longer show guild id in command updates log
- 86d01e0: feat: include error messages in debug logs
- 0b43b7b: feat: sage error replies for button interactions

## 0.4.2

### Patch Changes

- b0b3ec8: fix(cli): clean .build directory for pure js builds as well
- 2c63084: feat: keep a small log buffer in dev mode
- 953741b: feat: new "show logs" button in debug errors

## 0.4.1

### Patch Changes

- 080f67e: fix(cli): copy instead of compiling for normal js projects

## 0.4.0

### Minor Changes

- ee2b5a9: feat: automatic promise rejection handling
- ad5768f: feat: command return values are now optional

### Patch Changes

- 116ebab: feat(cli): new "why" command that explains your robo structure
- 51b608b: refactor: default commands now in /default directory with events support
- 647e99b: fix(cli): auto-generated commands and events are now properly marked as "auto"
- a6ed21a: fix(cli): "auto" marker for auto generated events
- 07bd8f0: refactor: renamed "stack trace" button to "show stack trace" in errors
- 7375d4f: refactor: more accurate "powered by" wording
- 16a0531: feat: stop() function now supports custom exit codes
- 099cf9a: fix(cli): generated defaults no longer override events and commands check for more file types
- 2f77aed: feat: export chalk and logger
- 3a20df8: feat: more flexible logger parameters
- 08afac9: chore: skip trigger logs for auto-generated events
- 9f56985: refactor(cli): use "info" instead of "event" for initial log
- 9bb58f7: refactor(cli): print "wait" instead of "info" for restarts

## 0.3.1

### Patch Changes

- 3a00456: fix: better nested error handling
- ee7429a: feat: show exact code at fault in error messages
- 66a09cd: refactor: less robo branding on error messages
- 78353da: refactor: error message moved outside embed
- 6090b4d: feat: compact error message with stack trace follow up
- 3a1f016: feat: manifest now contains version and updatedAt
- 43c1bea: chore: minor logging improvements
- 1feb074: feat: support for source maps in dev mode

## 0.3.0

### Minor Changes

- 9c47ed7: feat: new restart robo function
- 59b8ff6: refactor: commands now register after build
- 8cd2790: refactor: renamed robosocket to robo
- bae3b0e: feat(config): intents replaced with client options
- f8df8b9: feat(sage): smarter deferrals with buffer time
- fa6429f: feat: sage now provides better error data in development

### Patch Changes

- 4dc61a4: fix: error stack traces in logger
- a7fbe32: chore: ready message now includes datetime
- df74d3f: fix(dev): gracefully handle manual stops
- fca4243: chore(debug): cleaned up incorrect logger usage
- e097334: chore(debug): changed windows pnpm fix log level to debug

## 0.2.6

### Patch Changes

- 1e4ad58: chore: updated types to reflect new options

## 0.2.5

### Patch Changes

- f97d57b: feat: support for more option types

## 0.2.4

### Patch Changes

- fa7fbd3: fix: correctly pass all event parameters
- f0d8cd1: fix: recursive pnpm on windows

## 0.2.3

### Patch Changes

- e289560: fix: absolute imports on windows

## 0.2.2

### Patch Changes

- 050eaa5: fix: windows usage with pnpm
- 14be7e7: chore: upped build size warning thresholds

## 0.2.1

### Patch Changes

- 71109a4: fix(pkg): updated all robo.js package references

## 0.2.0

### Minor Changes

- 0a1b4eb: feat: failsafe mode for plugins

## 0.1.1

### Patch Changes

- 0ff716e: perf: improved node_modules lookup for pnpm

## 0.1.0

### Minor Changes

- 8576ac6: feat: re-released as scoped robo.js. [read more](https://blog.waveplay.com/introducing-robo-and-roboplay/)

## 0.1.0

### Minor Changes

- a29f790: feat: introducing robo.js! [read more](https://blog.waveplay.com/introducing-robo-and-roboplay/)