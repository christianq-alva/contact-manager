/* eslint-disable react/prop-types */

export default function ContactList(props) {
  return (
    <ul>
      {props.contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <h3>{contact.name}</h3>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
          </li>
        );
      })}
    </ul>
  );
}