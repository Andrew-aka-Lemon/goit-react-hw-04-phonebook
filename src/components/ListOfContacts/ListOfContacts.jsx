import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListOfContacts = ({ onDeleteBtn, listToRender }) => {
  return (
    <div>
      <ul>
        {listToRender.map(({ id, name, number }) => {
          return (
            <Lishka key={id}>
              <span>
                {name}: {number}
              </span>
              <NotUglyBtn type="button" onClick={() => onDeleteBtn(id)}>
                Delete
              </NotUglyBtn>
            </Lishka>
          );
        })}
      </ul>
    </div>
  );
};

const NotUglyBtn = styled.button`
  margin-left: 5px;
  border-radius: 30%;
  border-color: #901818ce;
  background-color: #d1212152;

  :active {
    background-color: #e07474;
  }
`;

const Lishka = styled.li`
  display: flex;
  align-items: center;
`;

ListOfContacts.propTypes = {
  listToRender: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteBtn: PropTypes.func,
};

export default ListOfContacts;
