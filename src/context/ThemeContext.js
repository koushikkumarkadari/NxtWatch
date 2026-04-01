import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  changeActiveTheme: () => {},
})
export default ThemeContext
