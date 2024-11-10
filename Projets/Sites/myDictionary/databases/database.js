import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import { request } from 'express';

const db = await open({
    filename: './databases/dictionary.sqlite',
    driver: sqlite3.Database
});

export default db;