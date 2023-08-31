import { ContItemEl, ContactBtn } from './PhoneBook.styled';

export const ContactItem = ({ name, number, id, deleted }) => {
  return (
    <ContItemEl>
      <div>{name}: {number}</div>
      <ContactBtn
        onClick={e => deleted(e.target.value)}
        value={id}
        type="button"
      >
        Delete
      </ContactBtn>
    </ContItemEl>
  );
};
