CREATE TABLE IF NOT EXISTS account(
    id serial PRIMARY KEY,
    email VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (50) NOT NULL,
    accountType INTEGER NOT NULL,
    userId INTEGER NOT NULL
)

CREATE TABLE IF NOT EXISTS staff(
    id serial PRIMARY KEY,
    firstName
    lastName
    age
    sex
    role
    status
    photo
)

CREATE TABLE IF NOT EXISTS staff_role(
    id
    role
    description
)