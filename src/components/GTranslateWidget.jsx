import { useEffect } from 'react'
import "../App.css"

const GTranslateWidget = () => {
  useEffect(() => {
    const script1 = document.createElement('script')
    script1.innerHTML = `
      window.gtranslateSettings = {
        "default_language": "en",
        "detect_browser_language": true,
        "languages": ["en", "es", "fr", "ja", "pt", "zh-TW"],
        "globe_color": "#66aaff",
        "wrapper_selector": ".gtranslate_wrapper",
        "flag_size": 28,
      "horizontal_position": "right",
        "vertical_position": "top",
        "globe_size": 50
      }
    `
    document.body.appendChild(script1)

    const script2 = document.createElement('script')
    script2.src = 'https://cdn.gtranslate.net/widgets/latest/globe.js'
    script2.defer = true
    document.body.appendChild(script2)

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
    }
  }, [])

  return <div className="gtranslate_wrapper" id='world'></div>
}

export default GTranslateWidget
