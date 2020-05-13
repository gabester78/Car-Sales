import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/actions";

const AddedFeature = (props) => {
  const featureRemover = (event) => {
    event.preventDefault();
    props.removeFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={featureRemover} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
