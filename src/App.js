import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

//import actions
import { addFeature, removeFeature } from './actions/index';
import { connect } from 'react-redux';

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">

        <Header
          car={props.car}
          {...console.log(props.car)}
        />

        <AddedFeatures
          car={props.car}
          removeFeature={removeFeature}
        />

      </div>
      <div className="box">

        <AdditionalFeatures
          store={props.store}
          addFeature={buyItem}
        />

        <Total
          car={props.car}
          additionalPrice={props.additionalPrice} />

      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state)
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
