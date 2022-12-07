import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../Colors'
import tempData from '../tempData'

export default class AddListModel extends React.Component {
  backgroundColors = ["#5CD859","#24A6D9","#5958D9","#8022D9","#D85963","#D159D8","#D88559"]
  state = {
    name: "",
    color: this.backgroundColors[0]
  }
  
  createTodo = () => {
    const {name, color} = this.state;
    const list = {name, color};
    this.props.addList(list)
   
    this.setState({name : ""})
    this.props.closeModal();
  
  }
  renderColors()
  {
      return this.backgroundColors.map(color => {
        return (
          <TouchableOpacity
          key={color}
          style= {[styles.colorSelect, {backgroundColor: color}]}
          onPress= {() => this.setState({color})}
          />
        );
      });
    
  }

}

