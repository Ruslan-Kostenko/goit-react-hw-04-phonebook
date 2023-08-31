import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, deleted }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.Name}
            number={contact.Number}
            deleted={deleted}
          ></ContactItem>
        );
      })}
    </ul>
  );
};
