import React from 'react'
import HomePageScreen from '../screens/HomePageScreen'
import Featured from '../components/Featured/Featured'
import HomeScreen from '../screens/HomeScreen'
export default function HomePage() {
  return (
    <div>
      <HomePageScreen />
      <Featured />
      <HomeScreen /> 
    </div>
  )
}
