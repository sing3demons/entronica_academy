import initMongodb from './db-mongo'

const startup = (): void => {
  try {
    initMongodb()
  } catch (error: any) {
    console.error(error)
  }
}

export { startup }
