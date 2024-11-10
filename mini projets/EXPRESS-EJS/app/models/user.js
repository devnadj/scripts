import client from "../database/db.js";
import validator from "validator";

class User {
    #userid;
    #firstname; #lastname;
    #email;
    #password;
    #phone;
    #address; #cp; #city;
    #errors;

    constructor(user) {
        this.#errors = [];
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.cp = user.cp;
        this.city = user.city;
    }

    get errors() { return this.#errors; }

    get userid() { return this.#userid; }
    set userid(value) { this.#userid = value; }

    get firstname() { return this.#firstname; }
    set firstname(value) {
        if(!value || value?.length < 2 && value?.length > 32) {
            this.#errors.push('firstname');
        } else {
            this.#firstname = value;
        }
    }

    get lastname() { return this.#lastname; }
    set lastname(value) {
        if(!value || value?.length < 2 && value?.length > 32) {
            this.#errors.push('lastname');
        } else {
            this.#lastname = value;
        }
    }

    get phone() { return this.#phone; }
    set phone(value) {
        if(value.length >=10 && value.length <=12) {
            this.#phone = value;
        } else {
            this.#errors.push('phone');
        }
    }

    get email() { return this.#email; }
    set email(value) {
        if(!validator.isEmail(value)) {
            this.#errors.push('email error');
        } else {
            this.#email = value;
        }
    }

    get password() { return this.#password; }
    set password(value) {
        if(!value) {
            this.#errors.push('password');
        } else {
            this.#password = value;
        }
    }

    get address() { return this.#address; }
    set address(value) {
        if(!value || value?.length < 2 && value?.length > 32) {
            this.#errors.push('address');
        } else {
            this.#address = value;
        }
    }

    get cp() { return this.#cp; }
    set cp(value) {
        if(!validator.isPostalCode(value , 'FR')) {
            this.#errors.push('cp');
        } else {
            this.#cp = value;
        }
    }

    get city() { return this.#city; }
    set city(value) {
        if(!value || value?.length < 2 && value?.length > 50) {
            this.#errors.push('city');
        } else {
            this.#city = value;
        }
    }

    /// Vérifie si l'email existe déjà dans la base de données
    /// @param {string} email
    /// @returns {boolean}
    static async isEmailExist(email) {
        const request = `SELECT * FROM "User" WHERE "email" = $1;`;
        const values = [email];
        const result = await client.query(request, values);
        console.log('result.rowCount', result.rowCount);
        console.log('result.rows', result.rows);
        console.log('result.rows > 0', result.rows > 0);

        return result.rowCount > 0;
    }

    /// Crée un nouvel utilisateur dans la base de données
    /// @returns {number} userid
    async create() {
        const request = `INSERT INTO "User" (firstname, lastname, email, password, address, cp, city, phone) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING userid`;
        const values = [this.#firstname, this.#lastname, this.#email, this.#password, this.#address, this.#cp, this.#city, this.#phone];
        const userid = await client.query(request, values);
        return userid;
    }

    /// Recherche un utilisateur dans la base de données
    /// @param {string} email
    /// @returns {object} user
    static async read(email) {
        const request = `SELECT * FROM "User" WHERE email=$1`;
        const values = [email];
        const result = await client.query(request, values);
        if(result.rowCount > 0) {
            return result.rows[0];
        } else {
            return null;
        }
    }

    /// Met à jour un utilisateur dans la base de données
    /// @param {object} user
    /// @returns {object} user
    static async update(user) {
        const request = `UPDATE "User" SET firstname=$1, lastname=$2, email=$3, password=$4 WHERE userid=$5 RETURNING *`;
        const values = [user.firstname, user.lastname, user.email, user.password, user.userid];
        const result = await client.query(request, values);
        return result.rows[0];
    }

    static async getPassword(email) {
        const request = `SELECT password FROM "User" WHERE email=$1`;
        const values = [email];
        const result = await client.query(request, values);
        if(result.rowCount > 0) {
            return result.rows[0].password;
        } else {
            return null;
        }
    }

    static async updatePassword(email, password) {
        const request = `UPDATE "User" SET password=$1 WHERE email=$2 RETURNING *`;
        const values = [password, email];
        const result = await client.query(request, values);
        return result.rows[0];
    }

    /// Supprime un utilisateur de la base de données
    /// @param {number} userid
    static async delete(userid) {
        const request = `DELETE FROM "User" WHERE userid=$1`;
        const values = [userid];
        await client.query(request, values);
    }

    /// Supprime un utilisateur de la base de données
    /// @param {string} email
    static async delete(email) {
        const request = `DELETE FROM "User" WHERE email=$1`;
        const values = [this.email];
        await client.query(request, values);
    }
}

export default User;
