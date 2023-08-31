import { FilterInput } from './PhoneBook.styled';

export const Filter = ({ phoneFilter, changeFilter }) => {
  return (
    <>
      <label>
        Find contacts by name
        <FilterInput
          value={phoneFilter}
          onChange={e => changeFilter(e.target.value)}
        />
      </label>
    </>
  );
};
