import { v4 } from 'uuid'

interface createContact {
  name: string
  email: string
  phone: string
  category_id: string
}

interface Contact extends createContact {
  id: string
}

let contacts: Array<Contact> = [
  {
    id: v4(),
    name: 'Henrique',
    email: 'henrique@mail.com',
    phone: '123123213',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Alexandre',
    email: 'alexandre@mail.com',
    phone: '321453566',
    category_id: v4(),
  },
]

class ContactRepository {
  findAll(): Promise<Contact[]> {
    return new Promise<Contact[]>((resolve) => {
      resolve(contacts)
    })
  }

  findById(id: string): Promise<Contact | undefined> {
    return new Promise<Contact | undefined>((resolve) => {
      resolve(contacts.find((contact) => contact.id === id))
    })
  }

  findByEmail(email: string): Promise<Contact | undefined> {
    return new Promise<Contact | undefined>((resolve) => {
      resolve(contacts.find((contact) => contact.email === email))
    })
  }

  delete(id: string): Promise<void> {
    return new Promise<void>((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve()
    })
  }

  create({ name, email, phone, category_id }: createContact): Promise<Contact> {
    return new Promise<Contact>((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      }
      contacts.push(newContact)

      resolve(newContact)
    })
  }
}

export default new ContactRepository()
