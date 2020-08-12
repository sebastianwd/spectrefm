import Cookies from 'universal-cookie'
import { IncomingMessage } from 'http'

const cookies = (req?: IncomingMessage) => {
  return new Cookies(req?.headers.cookie)
}

export default cookies
