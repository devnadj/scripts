import users from './data.js'
import bcrypt from 'bcrypt';
import pg from 'pg';


// Configuration de la connexion
const client = new pg.Client({
    user: 'script',
    host: 'localhost',
    database: 'script',
    password: 'script',
    port: 5432, // Par défaut le port de PostgreSQL est 5432
});

console.log('connexion à la base de données');
client.connect();


try {
    const response = await client.query('delete from "User"');
    console.log('Suppression des données');
    console.log('response', response);
} catch (error) {
    console.log('erreur lors de la suppression des données');
}   


console.log('--------- seeding start ----------');
for(const user of users) {
    user.password = await bcrypt.hash(user.password, 10);
    // console.log(user);
    await seed(user);
}
console.log('--------- seeding end ----------');

async function seed (user) {
    // console.log(`insertion de ${user.firstname} ${user.lastname}`);
    const { firstname, lastname, phone, email, password, address, cp, city } = user;
    const values = [ firstname, lastname, phone, email, password, address, cp, city ]
    // console.log('values', values);
    try {
        await client.query(`INSERT INTO "User"(firstname, lastname, phone, email, password, address, cp, city) VALUES($1,$2,$3,$4,$5,$6,$7,$8);`, values);
    }
    catch(error) {
        console.log(`erreur lors de l'insertion des données de ${user.firstname} ${user.lastname}`); 
    }
}

await client.end();
console.log('connexion à la base de données fermée');