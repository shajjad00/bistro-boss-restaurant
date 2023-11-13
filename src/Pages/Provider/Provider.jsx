import PropTypes from "prop-types";
import { createContext } from "react";

const AllDataContext = createContext(null);
const Provider = ({ children }) => {
  const values = {};
  return (
    <AllDataContext.Provider value={values}>{children}</AllDataContext.Provider>
  );
};
Provider.propTypes = {
  children: PropTypes.node,
};
export default Provider;
