/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * const UsersLiestItem = (props) =>(
<li>
    {console.log(props)}
                <div>{props.userData.average}</div>
                <div>
                    <p> {props.userData.name}</p>
                    <p>{props.userData.attendance}</p>
                </div>
                <button>
                    X
                </button>
            </li>
);
 */
const UsersLiestItem = ({userData: {average,name,attendance = '0%' }}) =>(
<li>

                <div>{average}</div>
                <div>
                    <p> {name}</p>
                    <p>{attendance}</p>
                </div>
                <button>
                    X
                </button>
            </li>
);

UsersLiestItem.propTypes = {
    userData:PropTypes.shape({
        average:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        attendance:PropTypes.string,
    }),
};

export default UsersLiestItem;
