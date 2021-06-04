import { configureStore } from '@reduxjs/toolkit'
import  markersReducer  from '../features/markers/markersSave'
export default configureStore({
  reducer: {
    markers: markersReducer,
  }
})