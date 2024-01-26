import * as React from 'react';

export interface NotificationEmailProps {
	email: string;
	name: string;
	phone?: string;
	message: string;
	endorsement?: boolean;
}

export const NotificationEmail: React.FC<Readonly<NotificationEmailProps>> = ({
	email,
	name,
	phone,

	message,
}) => (
	<div>
		<h1> Ellie, You have a new message from your website </h1>
		<p> Name: {name} </p>
		<p> Email: {email} </p>
		{phone && <p> Phone: {phone} </p>}

		<p> Message: {message} </p>
	</div>
);

export default NotificationEmail;
