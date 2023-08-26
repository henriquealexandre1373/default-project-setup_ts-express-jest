import { Request, Response } from 'express'

class ContactController {
  index(request: Request, response: Response) {
    // List all records
    response.send('Send from Contact Controller')
  }

  show() {
    // Get a record
  }

  store() {
    // Create new record
  }

  update() {
    // Edit a record
  }

  delete() {
    // Delete a record
  }
}

// Singleton
export default new ContactController()
