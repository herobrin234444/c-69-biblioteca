import React,{Component} from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

import BottomTabNavigator from "./components/BottomTabNavigator";

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      fontLoad:false
    }
  }

  async LoadFonts(){
     await Font.loadAsync({
      Rajdhani_600SemiBold:Rajdhani_600SemiBold
     });
     this.setState({
      fontLoad:true
     })
  }

  componentDidMount(){
    this.LoadFonts();
  }

 render(){ 
  const {fontLoad} = this.state;
  if (fontLoad === true){
  return <BottomTabNavigator/>
 }
 return null; 
}
}