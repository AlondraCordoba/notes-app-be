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

}