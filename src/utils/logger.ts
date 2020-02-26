const logger = (store: any) => (next: any) => (action: any) => {
    let result = next(action)
    return result
  }

  export default logger