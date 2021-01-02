import React, { useContext } from 'react';
import Card from 'components/Slider/Card/Card';
import styled from 'styled-components';
import { Context } from 'state/store';

const StyledMyList = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const MyList = () => {
  const { state } = useContext(Context);

  return (
    <StyledMyList>
      {state.content.map((content) =>
        content.content.map((item) =>
          item.my_list ? <Card width="16.5" content={item} key={item.id} /> : null,
        ),
      )}
    </StyledMyList>
  );
};

export default MyList;
