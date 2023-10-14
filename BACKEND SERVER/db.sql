CREATE DATABASE pg_booking_node_version1;

CREATE TABLE admin (
    admin_id int NOT NULL AUTO_INCREMENT,
    admin_first_name varchar(255),
    admin_last_name varchar(255),
    admin_email varchar(255),
    admin_address varchar(255),
    admin_password varchar(255),
    admin_mobile varchar(255),
    admin_profileImage VARCHAR(100),
    PRIMARY KEY (admin_id)
);

CREATE TABLE users (
    user_id int NOT NULL AUTO_INCREMENT,
    user_first_name varchar(255),
    user_last_name varchar(255),
    user_email varchar(255),
    user_password varchar(255),
    user_mobile varchar(255),
    user_profileImage VARCHAR(100),
    PRIMARY KEY (user_id)
);

CREATE TABLE owner (
    owner_id int NOT NULL AUTO_INCREMENT,
    owner_first_name varchar(255),
    owner_last_name varchar(255),
    owner_email varchar(255),
    owner_password varchar(255),
    owner_mobile varchar(255),
    owner_profileImage VARCHAR(100),
    PRIMARY KEY (owner_id)
);

CREATE TABLE feedback (
    feedback_id int NOT NULL AUTO_INCREMENT,
    feedback_description varchar(255),
    user_id int,
    pg_id int,
    pg_rating varchar(255),
    PRIMARY KEY (feedback_id),
    foreign key(user_id) references users(user_id) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE pg (
    pg_id int NOT NULL AUTO_INCREMENT,
    pg_Image VARCHAR(100),
    pg_name varchar(255),
    pg_type varchar(255),
    pg_city varchar(255),
    pg_isVacaent TINYINT(1),
    pg_rent varchar(255),
    pg_address varchar(255),
    pg_foodType varchar(255),
    owner_id int,
    pg_rating varchar(255),
    PRIMARY KEY (pg_id),
    foreign key(owner_id) references owner(owner_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE bookings (
	booking_id int NOT NULL AUTO_INCREMENT,
	user_id int,
	owner_id int,
	pg_id int,
	from_date DATE,
	end_date Date,
	PRIMARY KEY (booking_id),
	foreign key(pg_id) references pg(pg_id)
    	ON DELETE CASCADE
    	ON UPDATE CASCADE
);

CREATE TABLE bookings (
	booking_id int NOT NULL AUTO_INCREMENT,
	user_id int,
	owner_id int,
	pg_id int,
	PRIMARY KEY (booking_id),
	foreign key(pg_id) references pg(pg_id)
    	ON DELETE CASCADE
    	ON UPDATE CASCADE
);
