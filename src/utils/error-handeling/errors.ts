export class ApplicationError extends Error {
  __proto__: Error
  name: string = 'ApplicationError'
  message: string
  stack: string | undefined
  details: {
    [detail: string]: any,
  } | undefined

  constructor(message: string = '', details?: ApplicationError['details']) {
    super(message)

    this.message = message
    this.details = details

    // fix for error prototype chain issue: https://github.com/microsoft/TypeScript/issues/13965
    this.__proto__ = new.target.prototype
  }

  static fromError(error: Error, details?: ApplicationError['details']) {
    const newError = new this(error.message, details)
    newError.stack = error.stack
    return newError
  }
}

export class HttpError extends ApplicationError {
  name: string = 'HttpError'
  statusCode: number | undefined
  statusText: string | undefined
}

export class InternalServerError extends HttpError {
  name: string = 'InternalServerError'
  statusCode = 500
  statusText = 'Internal Server Error'
}

export class BadGateway extends HttpError {
  name: string = 'BadGateway'
  statusCode = 502
  statusText = 'Bad Gateway'
}

export class BadRequest extends HttpError {
  name: string = 'BadRequest'
  statusCode = 400
  statusText = 'Bad Request'
}

export class Unauthorized extends HttpError {
  name: string = 'Unauthorized'
  statusCode = 401
  statusText = 'Unauthorized'
}
