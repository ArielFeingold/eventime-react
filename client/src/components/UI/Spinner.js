import React from 'react';
import { css } from 'react-emotion';
import { RingLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Spinner = () => {

    return (
        <RingLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={'#2F43FF'}
        />
    )
}

export default Spinner;
