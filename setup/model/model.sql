create database pullo;

create table products (
  product_id int generated by default as identity primary key,
  product_name varchar(64) not null,
  product_price decimal not null,
  product_summary text,
  product_rating smallint,
  product_photo varchar(64) not null,
  product_new boolean default false
);

create table opinions (
  opinion_id int4 generated by default as identity primary key,
  opinion_author_name varchar(32) not null,
  opinion_author_phonenumber varchar(16) not null,
  opinion_author_email varchar(16) not null,
  opinion_author_message varchar(16) not null
);

create table customers_email(
  customer_id int generated by default as identity primary key,
  customer_email varchar(16)
);

