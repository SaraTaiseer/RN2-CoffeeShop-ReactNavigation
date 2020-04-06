import React, { Component } from "react";
import { Spinner, Header, Container } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

// Components
import RootNavigator from "./Navigation";

import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import CoffeeList from "./Components/CoffeeList";
import CoffeeDetail from "./Components/CoffeeDetail";
import CoffeeCart from "./Components/CoffeeCart";

export default class App extends Component {
  // HERE
  // state = {
  //   loading: true,
  // };
  // HERE
  // async componentDidMount() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //   });
  //   this.setState({ loading: false });
  // }
  render() {
    // AND HERE
    // if (this.state.loading) {
    //   return <Spinner color="#132D4B" />;
    // }
    return (
      <NavigationContainer>
        <Container>
          {/* <Header /> */}
          {/* <Signup /> */}
          <RootNavigator />
        </Container>
      </NavigationContainer>
    );
  }
}
