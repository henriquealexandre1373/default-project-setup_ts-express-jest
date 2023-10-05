import { Request, Response } from 'express'
import ContactRepository from '@Repositories/ContactRepository'

class ContactController {
  async index(request: Request, response: Response) {
    // List all records
    const contacts = await ContactRepository.findAll()

    response.json(contacts)
  }

  async show() {
    // Get a record
  }

  store() {
    // Create new record
  }

  update() {
    // Edit a record
  }

  async delete() {
    // Delete a record
  }
}

// Singleton
export default new ContactController()
