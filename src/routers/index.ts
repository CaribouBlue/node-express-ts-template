import { Express, Router } from 'express'
import { readdirSync } from 'fs'

const getSubDirectories = (path: string) =>
  readdirSync(path, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

export const createRouterRegister = (path: string) => {
  const register = async (app: Express | Router, routerPrefix: string = '/') => {
    const subDirectories = getSubDirectories(path)
    for (let dirname of subDirectories) {
      const { router } = await import(`${path}/${dirname}`)
      app.use(`${routerPrefix}${dirname}`, router)
    }
  }
  return register
}
