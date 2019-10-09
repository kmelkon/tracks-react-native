import { AsyncStorage } from 'react-native'

import createDataContext from './createDataContext'
import trackerApi from '../../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
    case 'signup':
      // reset the state on signup
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'signout':
      return { token: null, errorMessage: '' }
    default:
      return state
  }
}

const signup = dispatch => async ({ email, password }) => {
  try {
    // post to signup and get the jwt
    const response = await trackerApi.post('/signup', { email, password })
    // store the jwt in asynStorage
    await AsyncStorage.setItem('token', response.data.token)
    // dispatch a signup action
    dispatch({ type: 'signup', payload: response.data.token })
    // navigate to main flow
    navigate('TrackList')
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong while signing up :(' })
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin' })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in :(' })
  }
}

const signout = dispatch => async ({ email, password }) => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout' })
  navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  {
    token: null,
    errorMessage: '',
  }
)
