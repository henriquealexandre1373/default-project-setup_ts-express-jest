import { Request, Response } from 'express'
import ContactRepository from '@Repositories/ContactRepository'

class ContactController {
  async index(request: Request, response: Response) {
    // List all records
    const contacts = await ContactRepository.findAll()

    response.json(contacts)
  }

  async show(request: Request, response: Response) {
    // Get a record
    const { id } = request.params
    const contact = await ContactRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ error: 'User not found' })
    }

    response.json(contact)
  }

  store() {
    // Create new record
  }

  update() {
    // Edit a record
  }

  async delete(request: Request, response: Response) {
    // Delete a record
    const { id } = request.params

    const contact = await ContactRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ error: 'User not found' })
    }

    await ContactRepository.delete(id)

    response.sendStatus(204)
  }
}

// Singleton
export default new ContactController()
