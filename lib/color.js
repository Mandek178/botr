const chalk = require('chalk');
const brightcolor  = require('colors');

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
const FarzLog = (text, color) => {
	return !color ? chalk.red('[ SYSTEM ] ') + chalk.yellow(text) : chalk.red('[ SYSTEM ] ') + chalk.keyword(color)(text)
}
module.exports = {
	color,
	bgcolor,
	brightcolor,
    FarzLog
}
