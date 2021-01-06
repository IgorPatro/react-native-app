import React, { useState } from "react"
import { View, Button, TextInput, StyleSheet } from "react-native"

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("")

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return (
    <View>
      <TextInput
        placeholder="Course goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="ADD"
        onPress={() => {
          onAddGoal(enteredGoal)
          setEnteredGoal("")
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 20,
    color: "black",
  },
})

export default GoalInput
