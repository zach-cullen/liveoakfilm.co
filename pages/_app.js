import '../styles/global.css'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
