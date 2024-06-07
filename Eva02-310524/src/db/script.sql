CREATE DATABASE IF NOT EXISTS 'albo_store';

use albo_store;

CREATE TABLE merch(
    serial int unique not null,
    merchType varchar(30) not null,
    merchSize varchar(30) not null,
    stock int not null,
    price int not null,
    model varchar(100),
    primary key(id);
)

CREATE TABLE client(
    email varchar(255) unique not null,
    name varchar(30) not null,
    surname varchar(30) not null,
    pass varchar(32) not null,
    primary key(email);
)

CREATE TABLE orders(
    id int unique not null,
    creationDate date not null,
    serial int unique not null,
    price int unique not null,
    email varchar(255) not null,
    primary key(id),
    foreign key(email) references client(email),
    foreign key(price) references merch(price),
    foreign key(serial) references merch(serial);
)