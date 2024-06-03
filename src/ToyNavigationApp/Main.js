import React, { useState, useEffect } from 'react';
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
import GoldeleteImg from './assets/Goldelete.png';

import styles from './styles';

function App() {
  const [date, setDate] = useState(new Date());
  const [dailyData, setDailyData] = useState({});
  const [goals, setGoals] = useState([]);
  const [goalTitles, setGoalTitles] = useState({});
  const [goalContents, setGoalContents] = useState({});
  const [isEditingTitle, setIsEditingTitle] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const dateString = format(date, 'yyyy-MM-dd');
    const data = dailyData[dateString] || { goals: [], goalTitles: {}, goalContents: {} };
    setGoals(data.goals);
    setGoalTitles(data.goalTitles);
    setGoalContents(data.goalContents);
    setIsEditingTitle({});
  }, [date, dailyData]);

  const saveDailyData = (newGoals, newGoalTitles, newGoalContents) => {
    const dateString = format(date, 'yyyy-MM-dd');
    setDailyData({
      ...dailyData,
      [dateString]: {
        goals: newGoals,
        goalTitles: newGoalTitles,
        goalContents: newGoalContents,
      },
    });
  };

  const addGoal = () => {
    const newGoalId = `goal-${goals.length + 1}`;
    const newGoals = [...goals, newGoalId];
    const newGoalTitles = { ...goalTitles, [newGoalId]: `목표 ${goals.length + 1}` };
    const newGoalContents = { ...goalContents, [newGoalId]: [] };
    setGoals(newGoals);
    setGoalTitles(newGoalTitles);
    setGoalContents(newGoalContents);
    setIsEditingTitle({ ...isEditingTitle, [newGoalId]: true });
    saveDailyData(newGoals, newGoalTitles, newGoalContents);
  };

  const deleteGoal = (goalId) => {
    const newGoals = goals.filter((id) => id !== goalId);
    const newGoalTitles = { ...goalTitles };
    const newGoalContents = { ...goalContents };
    delete newGoalTitles[goalId];
    delete newGoalContents[goalId];
    setGoals(newGoals);
    setGoalTitles(newGoalTitles);
    setGoalContents(newGoalContents);
    saveDailyData(newGoals, newGoalTitles, newGoalContents);
  };

  const addContentToGoal = (goalId) => {
    const newGoalContents = {
      ...goalContents,
      [goalId]: [...(goalContents[goalId] || []), { text: '', completed: false, isEditing: true }],
    };
    setGoalContents(newGoalContents);
    saveDailyData(goals, goalTitles, newGoalContents);
  };

  const updateGoalTitle = (goalId, title) => {
    const newGoalTitles = { ...goalTitles, [goalId]: title };
    setGoalTitles(newGoalTitles);
    saveDailyData(goals, newGoalTitles, goalContents);
  };

  const updateContentText = (goalId, index, text) => {
    const newGoalContents = {
      ...goalContents,
      [goalId]: goalContents[goalId].map((content, i) =>
        i === index ? { ...content, text } : content
      ),
    };
    setGoalContents(newGoalContents);
    saveDailyData(goals, goalTitles, newGoalContents);
  };

  const toggleContentCompletion = (goalId, index) => {
    const newGoalContents = {
      ...goalContents,
      [goalId]: goalContents[goalId].map((content, i) =>
        i === index ? { ...content, completed: !content.completed, isEditing: false } : content
      ),
    };
    setGoalContents(newGoalContents);
    saveDailyData(goals, goalTitles, newGoalContents);
  };

  const deleteContent = (goalId, index) => {
    const newGoalContents = {
      ...goalContents,
      [goalId]: goalContents[goalId].filter((_, i) => i !== index),
    };
    setGoalContents(newGoalContents);
    saveDailyData(goals, goalTitles, newGoalContents);
  };

  const handleTitleKeyDown = (e, goalId) => {
    if (e.key === 'Enter') {
      setIsEditingTitle({ ...isEditingTitle, [goalId]: false });
      saveDailyData(goals, goalTitles, goalContents);
    }
  };

  const handleContentKeyDown = (e, goalId, index) => {
    if (e.key === 'Enter') {
      const newGoalContents = {
        ...goalContents,
        [goalId]: goalContents[goalId].map((content, i) =>
          i === index ? { ...content, isEditing: false } : content
        ),
      };
      setGoalContents(newGoalContents);
      saveDailyData(goals, goalTitles, newGoalContents);
    }
  };

  const calculateProgress = (goalId) => {
    const totalItems = goalContents[goalId]?.length || 0;
    const completedItems = goalContents[goalId]?.filter((content) => content.completed)?.length || 0;
    return totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);
  };

  const getMarkedDates = () => {
    const markedDates = {};
    for (const date in dailyData) {
      if (dailyData[date].goals.length > 0) {
        markedDates[date] = { selected: true, selectedColor: 'yellow' };
      }
    }
    const selectedDate = format(date, 'yyyy-MM-dd', { locale: ko });
    markedDates[selectedDate] = { selected: true, selectedColor: 'skyblue' };
    return markedDates;
  };

  return (
    <ScrollView style={styles.app}>
      <Image source={TitleImg} style={styles.titleImg} />
      <View style={styles.appContainer}>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => setDate(new Date(day.dateString))}
            markedDates={getMarkedDates()}
          />
        </View>
        <View style={styles.todoContainer}>
          <Text style={styles.todoTitle}>{format(date, 'PPP', { locale: ko })}의 할 일</Text>
          <ScrollView style={styles.todoList}>
            {goals.map((goalId) => (
              <View key={goalId}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={[styles.goalHeader, { width: Math.max(40, goalTitles[goalId]?.length * 25 || 40) }]}>
                    {isEditingTitle[goalId] ? (
                      <TextInput
                      style={{ ...styles.goalTitleInput, flex: 0 }} // flex: 0으로 수정
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
                  <TouchableOpacity style={styles.deleteGoalButton} onPress={() => deleteGoal(goalId)}>
                    <Image source={GoldeleteImg} style={styles.GoldeleteImg} />
                  </TouchableOpacity>
                </View>

                {goalContents[goalId]?.map((content, index) => (
                  <View key={index} style={[styles.todoItem, content.completed && styles.completed]}>
                    <TouchableOpacity style={styles.completeButton} onPress={() => toggleContentCompletion(goalId, index)}>
                      <Image source={content.completed ? CloudImg : BlackCloudImg} style={styles.cloudImg} />
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

                {/* Add progress bar */}
                <View style={styles.progressBarContainer}>
                  <View style={[styles.progressBar, { width: `${calculateProgress(goalId)}%` }]} />
                  <Text style={styles.progressText}>진행률: {calculateProgress(goalId)}%</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.addGoalButton} onPress={addGoal}>
            <Text style={styles.addGoalButtonText}>목표 추가하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default App;
