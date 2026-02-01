import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Helper functions for JSON file operations
function readJsonFile<T>(filename: string): T[] {
  const filePath = path.join(dataDir, filename)
  if (!fs.existsSync(filePath)) {
    return []
  }
  const data = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(data)
}

function writeJsonFile<T>(filename: string, data: T[]): void {
  const filePath = path.join(dataDir, filename)
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

// Contact operations
export const contactOperations = {
  getAll: () => readJsonFile<Contact>('contacts.json'),
  add: (contact: Omit<Contact, 'id' | 'createdAt'>) => {
    const contacts = readJsonFile<Contact>('contacts.json')
    const newContact: Contact = {
      ...contact,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }
    contacts.push(newContact)
    writeJsonFile('contacts.json', contacts)
    return newContact
  },
}

// Admission operations
export const admissionOperations = {
  getAll: () => readJsonFile<Admission>('admissions.json'),
  add: (admission: Omit<Admission, 'id' | 'createdAt'>) => {
    const admissions = readJsonFile<Admission>('admissions.json')
    const newAdmission: Admission = {
      ...admission,
      id: Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    admissions.push(newAdmission)
    writeJsonFile('admissions.json', admissions)
    return newAdmission
  },
}

// Event operations
export const eventOperations = {
  getAll: () => readJsonFile<Event>('events.json'),
  add: (event: Omit<Event, 'id' | 'createdAt'>) => {
    const events = readJsonFile<Event>('events.json')
    const newEvent: Event = {
      ...event,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }
    events.push(newEvent)
    writeJsonFile('events.json', events)
    return newEvent
  },
}

// Faculty operations
export const facultyOperations = {
  getAll: () => readJsonFile<Faculty>('faculty.json'),
  add: (faculty: Omit<Faculty, 'id' | 'createdAt'>) => {
    const facultyList = readJsonFile<Faculty>('faculty.json')
    const newFaculty: Faculty = {
      ...faculty,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    }
    facultyList.push(newFaculty)
    writeJsonFile('faculty.json', facultyList)
    return newFaculty
  },
}

// Types
export interface Contact {
  id: number
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  createdAt: string
}

export interface Admission {
  id: number
  studentName: string
  parentName: string
  email: string
  phone: string
  classApplying: string
  dateOfBirth: string
  address: string
  previousSchool?: string
  documents?: string
  status: string
  createdAt: string
}

export interface Event {
  id: number
  title: string
  date: string
  time: string
  venue: string
  description: string
  category: string
  image?: string
  isUpcoming: boolean
  createdAt: string
}

export interface Faculty {
  id: number
  name: string
  role: string
  department: string
  qualification: string
  experience: string
  email?: string
  phone?: string
  image?: string
  bio?: string
  createdAt: string
}