import { open } from 'sqlite'

import sqlite3 from 'sqlite3'

export default async function openDb() {
  return open({
    filename: './db.db',
    driver: sqlite3.Database
  })  
}