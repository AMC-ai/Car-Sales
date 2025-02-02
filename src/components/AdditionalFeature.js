import React from 'react';
import { useDispatch } from 'react-redux';
import { addFeature } from '../actions/index';


const AdditionalFeature = props => {
  console.log("add feat 1", props)
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => dispatch(addFeature(props.feature))}
        className="button">
        Add
        </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
