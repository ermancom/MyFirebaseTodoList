
const functions = require('firebase-functions');
const app = require('express')();
const  cors= require('cors');

const { getAllTodos, postOneTodo,deleteTodo,editTodo,getOneTodo} = require('./APIs/todos');
const { signUpUser,loginUser} = require('./APIs/users')
const { getUserDetail } = require('./APIs/users');
const auth = require('./util/auth');
app.use(cors());

const {updateUserDetails} = require('./APIs/users');

app.post('/user', auth, updateUserDetails);
app.get('/user', auth, getUserDetail);
app.post('/login',loginUser);
app.post('/signup', signUpUser);

// Todos
app.get('/todos', auth, getAllTodos);
app.get('/todo/:todoId', auth, getOneTodo);
app.post('/todo',auth, postOneTodo);
app.delete('/todo/:todoId',auth, deleteTodo);
app.put('/todo/:todoId',auth, editTodo);
exports.api = functions.https.onRequest(app);
 