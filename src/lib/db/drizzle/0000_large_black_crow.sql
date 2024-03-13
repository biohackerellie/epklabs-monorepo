CREATE TABLE `emails` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`name` varchar(255),
	`volunteer` boolean,
	CONSTRAINT `emails_id` PRIMARY KEY(`id`)
);
