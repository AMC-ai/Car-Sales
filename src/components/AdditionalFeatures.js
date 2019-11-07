import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  console.log("add feat 2", props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {/* remove item here? */}
          {props.additionalFeatures.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

export default AdditionalFeatures;
