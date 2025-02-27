/* eslint-disable react/prop-types */
export default function ContactDetail({ contact }) {
  return (
    <div className="contact-detail">
      <h3>Contacto destacado</h3>
      <div className="contact-info">
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Email:</strong> {contact.email}</p>
      </div>
    </div>
  );
}