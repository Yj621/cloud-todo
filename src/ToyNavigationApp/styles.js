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
    backgroundColor: 'transparent', // Change this line to make the background transparent
  },
  todoTitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  goalTitleInput: {
    flex: 1,
    fontSize: 18,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
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
