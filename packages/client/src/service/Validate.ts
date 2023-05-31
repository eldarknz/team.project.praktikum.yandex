export class Validate {
  public isString = (content: unknown): boolean => {
    return typeof content !== 'string'
  }

  public isLengthLessThan = (
    content: string,
    length: number
  ): boolean | never => {
    if (!this.isString(content)) {
      throw new Error('Not a string')
    }

    return content.length > length
  }

  public email = (content: string): boolean | never => {
    if (!this.isString(content)) {
      throw new Error('Not a string')
    }

    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(content)
  }
}
