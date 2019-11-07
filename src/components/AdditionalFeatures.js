import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux'


const AdditionalFeatures = props => {
  console.log("add feat 2", props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">{props.additionalFeatures.map(item => (
          <AdditionalFeature
            key={item.id}
            feature={item}
          // add={props.addFeature}
          />
        ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }

}

export default connect(mapStateToProps)(AdditionalFeatures);
