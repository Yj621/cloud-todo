// styles.js

import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFBF1',
    padding: 20,
  },
  titleImg: {
    top: 10,
    left: 50,
    width: 170,
    height: 150,
  },
  appTitle: {
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  appContainer: {
    flex: 1,
    justifyContent: Platform.OS === 'web' ? 'flex-start' : 'center',
    alignItems: Platform.OS === 'web' ? 'flex-start' : 'center',
    marginHorizontal: 40,
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
  },
  calendarContainer: {
    width: Platform.OS === 'web' ? '40%' : '100%',
    padding: 10,
    backgroundColor: '#FFFBF1',
  },
  dateText: {
    fontSize: 18,
  },
  todoContainer: {
    width: Platform.OS === 'web' ? '60%' : '100%',
    textAlign: 'left',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: Platform.OS === 'web' ? 0 : 20,
    backgroundColor: 'transparent',
  },
  todoTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20, 
    height: '60%',
    width: 'auto', 
    minWidth: 200, 
    maxWidth: '90%', 
  },
  goalTitle: {
    flex: 1, 
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    //textOverflow: 'ellipsis',
  },
  goalTitleInput: {
    flex: 1,
    paddingVertical: 10, 
    paddingHorizontal: 10, 
    fontSize: 18,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    minWidth: 100,
    maxWidth: '90%',
  },
  
  
  addGoalButton: {
    backgroundColor: 'skyblue',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addGoalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addTodoTitle: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  addButton: {
    padding: 10,
    borderRadius: 5,
  },
  plusImg: {
    width: 40,
    height: 40,
  },
  todoList: {
    padding: 0,
  },
  todoItem: {
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    fontWeight: 'bold',
  },
  contentTextInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
    width: '70%',
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  todoText: {
    flex: 1,
    marginRight: 10,
  },
  completeButton: {
    padding: 5,
    borderRadius: 5,
  },
  cloudImg: {
    width: 40,
    height: 30,
  },
  deleteButton: {
    padding: 5,
    borderRadius: 5,
  },
  deleteImg: {
    width: 10,
    height: 10,
    marginRight: 10,
  },
  deleteGoal: {
    padding: 5,
    borderRadius: 5,
  },
  GoldeleteImg: {
    width: 40,
    height: 40,
    marginRight: 50,
  },
  todoInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  todoTitleText: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
});

export default styles;
