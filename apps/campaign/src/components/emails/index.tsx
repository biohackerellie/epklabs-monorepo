import * as React from "react";

export interface NotificationEmailProps {
  email: string;
  name: string;
  phone?: string;
  message: string;
  updates?: boolean;
  endorsement?: boolean;
  volunteer?: boolean;
}

export const NotificationEmail: React.FC<Readonly<NotificationEmailProps>> = ({
  email,
  name,
  phone,
  updates,
  volunteer,
  message,
}) => (
  <div>
    <h1> Ellie, You have a new message from your website </h1>
    <p> Name: {name} </p>
    <p> Email: {email} </p>
    {phone && <p> Phone: {phone} </p>}

    <p> Message: {message} </p>
    {updates && <p> User wants to receive updates </p>}
    {volunteer && <p> User wants to volunteer </p>}
  </div>
);

export default NotificationEmail;
