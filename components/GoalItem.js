import React from "react"
import { View, Text, StyleSheet } from "react-native"

const GoalItem = ({ content }) => {
  return (
    <View style={styles.goal}>
      <Text>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goal: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
})

export default GoalItem
