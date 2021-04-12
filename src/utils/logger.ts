import isProduction from './is-prod'

/* eslint-disable no-console */
const logger = isProduction ? () => {} : console.log.bind(console)

export default logger
