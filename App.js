import React, { useState } from "react"
import { StyleSheet, View, FlatList } from "react-native"

import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

const App = () => {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (goalContent) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(36).slice(2, 9), value: goalContent },
    ])
  }

  return (
    <View>
      <View style={styles.container}>
    <Text>Hello guys!</Text>
        <GoalInput onAddGoal={addGoalHandler} />
        {/* Flat List is better because if there is a lot of elements, Scroll View will not work very flexy */}
        <FlatList
          style={styles.goalsContainer}
          data={courseGoals}
          renderItem={(itemData) => <GoalItem content={itemData.item.value} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  goalsContainer: {
    marginTop: 20,
  },
})

export default App
