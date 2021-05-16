import '../styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
  size: 2,
  color: '#22D3EE',
})

if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
