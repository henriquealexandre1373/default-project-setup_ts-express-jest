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
      return response.status(404).json({ error: 'Contact not found' })
    }

    response.json(contact)
  }

  async store(request: Request, response: Response) {
    // Create new record
    const { name, email, phone, category_id } = request.body

    if (!name) {
      return response.status(400).json({ error: 'Name is required' })
    }

    const contactExists = await ContactRepository.findByEmail(email)

    if (contactExists) {
      return response
        .status(400)
        .json({ error: 'This e-mail is already in use' })
    }

    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    })

    response.json(contact)
  }

  async update(request: Request, response: Response) {
    // Edit a record
    const { id } = request.params
    const { name, email, phone, category_id } = request.body

    if (!name) {
      return response.status(400).json({ error: 'Name is required' })
    }

    const contactExists = await ContactRepository.findById(id)

    if (!contactExists) {
      return response.status(404).json({ error: 'Contact not found' })
    }

    const contactByEmail = await ContactRepository.findByEmail(email)

    if (contactByEmail && contactByEmail.id !== id) {
      return response
        .status(400)
        .json({ error: 'This e-mail is already in use' })
    }

    const contact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    })

    response.json(contact)
  }

  async delete(request: Request, response: Response) {
    // Delete a record
    const { id } = request.params

    const contact = await ContactRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' })
    }

    await ContactRepository.delete(id)

    response.sendStatus(204)
  }
}

// Singleton
export default new ContactController()
