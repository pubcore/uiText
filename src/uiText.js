import replace from './replace'
import {isDefaultTextModeEnabled} from './validateTextkey'
import uiTextV2 from './uiTextV2'

export {initLogMissingTextkey} from './logMissingTextkey'
export {initDefaultTexts} from './validateTextkey'
export {initAutoupdateDefaultTexts} from './autoupdateDefaultTexts'

export default (T, key, arg3, arg4) => {
	if (isDefaultTextModeEnabled()) {
		var isDev = typeof process.env.NODE_ENV == 'string' && process.env.NODE_ENV.search('dev') != -1
		return uiTextV2(T, key, arg3, arg4, isDev)
	} else {
		return replace({
			text: T[key],
			defaultText: typeof arg3 === 'string' ? arg3 : '',
			replacement: typeof arg3 === 'object' ? arg3 : arg4,
			key
		})
	}
}

export const uiTextOptional = (T, key, arg3, arg4) => replace({
	text: T[key] === undefined
		? (typeof arg3 === 'string' ? arg3 : '')
		: T[key],
	defaultText: '',
	replacement: typeof arg3 === 'object' ? arg3 : arg4,
	key
})
