import React from 'react';
import PropTypes from 'prop-types';

//ORIGINAL FORM: 
//
// const AppTitle = (props) => {
//   return(
//     <h1>{props.title}</h1>
//   )
// }

//SHORTHAND FORM:
const AppTitle = ({title}) => (
  <h1>{title}</h1>
);

AppTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default AppTitle; 