import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

import CloudImg from './assets/cloud.png';
import BlackCloudImg from './assets/cloud_black.png';
import PlusImg from './assets/plus.png';
import DeleteImg from './assets/delete.png';
import TitleImg from './assets/Title.png';

import styles from './styles';

function App() {
  const [date, setDate] = useState(new Date());
  const [goals, setGoals] = useState([]);
  const [goalTitles, setGoalTitles] = useState({});
  const [goalContents, setGoalContents] = useState({});
  const [isEditingTitle, setIsEditingTitle] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addGoal = () => {
    const newGoalId = `goal-${goals.length + 1}`;
    setGoals([...goals, newGoalId]);
    setGoalTitles({ ...goalTitles, [newGoalId]: `목표 ${goals.length + 1}` });
    setGoalContents({ ...goalContents, [newGoalId]: [] });
    setIsEditingTitle({ ...isEditingTitle, [newGoalId]: true });
  };

  const addContentToGoal = (goalId) => {
    setGoalContents({
      ...goalContents,
      [goalId]: [...(goalContents[goalId] || []), { text: '', completed: false, isEditing: true }]
    });
  };

  const updateGoalTitle = (goalId, title) => {
    setGoalTitles({ ...goalTitles, [goalId]: title });
  };

  const updateContentText = (goalId, index, text) => {
    setGoalContents({
      ...goalContents,
      [goalId]: goalContents[goalId].map((content, i) => i === index ? { ...content, text } : content)
    });
  };

  const toggleContentCompletion = (goalId, index) => {
    setGoalContents({
      ...goalContents,
      [goalId]: goalContents[goalId].map((content, i) => i === index ? { ...content, completed: !content.completed, isEditing: false } : content)
    });
  };

  const deleteContent = (goalId, index) => {
    setGoalContents({
      ...goalContents,
      [goalId]: goalContents[goalId].filter((_, i) => i !== index)
    });
  };

  const handleTitleKeyDown = (e, goalId) => {
    if (e.key === 'Enter') {
      setIsEditingTitle({ ...isEditingTitle, [goalId]: false });
    }
  };

  const handleContentKeyDown = (e, goalId, index) => {
    if (e.key === 'Enter') {
      setGoalContents({
        ...goalContents,
        [goalId]: goalContents[goalId].map((content, i) => i === index ? { ...content, isEditing: false } : content)
      });
    }
  };

  return (
    <View style={styles.app}>
      <Image source={TitleImg} style={styles.titleImg} />
      <View style={styles.appContainer}>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => setDate(new Date(day.dateString))}
            markedDates={{
              [format(date, 'yyyy-MM-dd', { locale: ko })]: { selected: true, selectedColor: 'skyblue' }
            }}
          />
        </View>
        <View style={styles.todoContainer}>
          <Text style={styles.todoTitle}>{format(date, 'PPP', { locale: ko })}의 할 일</Text>
          <ScrollView style={styles.todoList}>
            {goals.map((goalId) => (
              <View key={goalId}>
                <View style={styles.goalHeader}>
                  {isEditingTitle[goalId] ? (
                    <TextInput
                      style={styles.goalTitleInput}
                      value={goalTitles[goalId]}
                      onChangeText={(text) => updateGoalTitle(goalId, text)}
                      onSubmitEditing={(e) => handleTitleKeyDown(e, goalId)}
                    />
                  ) : (
                    <Text
                      style={styles.goalTitle}
                      onPress={() => setIsEditingTitle({ ...isEditingTitle, [goalId]: true })}
                    >
                      {goalTitles[goalId]}
                    </Text>
                  )}
                  <TouchableOpacity style={styles.addButton} onPress={() => addContentToGoal(goalId)}>
                    <Image source={PlusImg} style={styles.plusImg} />
                  </TouchableOpacity>
                </View>
                {goalContents[goalId]?.map((content, index) => (
                  <View key={index} style={[styles.todoItem, content.completed && styles.completed]}>
                    <TouchableOpacity style={styles.completeButton} onPress={() => toggleContentCompletion(goalId, index)}>
                      <Image
                        source={content.completed ? CloudImg : BlackCloudImg}
                        style={styles.cloudImg}
                      />
                    </TouchableOpacity>
                    {content.isEditing ? (
                      <TextInput
                        style={styles.todoInput}
                        value={content.text}
                        onChangeText={(text) => updateContentText(goalId, index, text)}
                        onSubmitEditing={(e) => handleContentKeyDown(e, goalId, index)}
                      />
                    ) : (
                      <Text
                        style={styles.todoText}
                        onPress={() => {
                          setGoalContents({
                            ...goalContents,
                            [goalId]: goalContents[goalId].map((content, i) => i === index ? { ...content, isEditing: true } : content)
                          });
                        }}
                      >
                        {content.text}
                      </Text>
                    )}
                    <TouchableOpacity style={styles.deleteButton} onPress={() => deleteContent(goalId, index)}>
                      <Image source={DeleteImg} style={styles.deleteImg} />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.addGoalButton} onPress={addGoal}>
            <Text style={styles.addGoalButtonText}>목표 추가하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default App;
