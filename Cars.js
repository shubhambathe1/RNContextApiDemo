// eslint-disable-next-line prettier/prettier
import React, { Component, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MyContext from './MyContext';
import Car from './Car';

// Functional Component
const Cars = (props) => {
  const myContext = React.useContext(MyContext);

  useEffect(() => {
    // console.log(JSON.stringify(props.cars));
    // props.cars.map((car) => console.warn(car));
    // console.warn(Object.keys(props.cars));
    // Object.keys(props.cars).map((carID) => console.log(props.cars[carID].name));

    console.log('CARz :', myContext.cars);
  }, []);

  return (
    <View>
      <Text>Cars:</Text>
      {/* Finally we can use data */}
      {Object.keys(myContext.cars).map((carID) => (
        <Car
          key={carID}
          name={myContext.cars[carID].name}
          price={myContext.cars[carID].price}
          incrementPrice={() => myContext.incrementCarPrice(carID)}
          decrementPrice={() => myContext.decrementCarPrice(carID)}
        />
      ))}
    </View>
  );
};

// Possible to use this way as well in functional component
// {/* <MyContext.Consumer>
//   {(context) => (
//     <View>
//       <Text>Cars:</Text>
//       {/* Finally we can use data */}
//       {Object.keys(context.cars).map((carID) => (
//         <Car
//           key={carID}
//           name={context.cars[carID].name}
//           price={context.cars[carID].price}
//           incrementPrice={() => context.incrementCarPrice(carID)}
//           decrementPrice={() => context.decrementCarPrice(carID)}
//         />
//       ))}
//     </View>
//   )}
// </MyContext.Consumer> */}

// Class Component
// class Cars extends Component {
//   render() {
//     return (
//       <MyContext.Consumer>
//         {(context) => (
//           <View>
//             <Text>Cars:</Text>
//             {/* Finally we can use data */}
//             {Object.keys(context.cars).map((carID) => (
//               <Car
//                 key={carID}
//                 name={context.cars[carID].name}
//                 price={context.cars[carID].price}
//                 incrementPrice={() => context.incrementCarPrice(carID)}
//                 decrementPrice={() => context.decrementCarPrice(carID)}
//               />
//             ))}
//           </View>
//         )}
//       </MyContext.Consumer>
//     );
//   }
// }

export default Cars;
