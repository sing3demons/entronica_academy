import initMongodb from './db-mongo'

const startup = async (): Promise<void> => {
  try {
    initMongodb()
  } catch (error: any) {
    console.error(error)
  }
}

export { startup }
