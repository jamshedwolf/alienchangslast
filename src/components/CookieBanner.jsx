import { useState } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleAccept = () => {
    console.log('Cookies accepted')
    Cookies.set('userConsent', 'true', { expires: 365 })
    setIsVisible(false)
  }

  const handleDecline = () => {
    console.log('Cookies declined')
    Cookies.set('userConsent', 'false', { expires: 365 })
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="userConsent"
      style={{ background: '#2c3e50' }}
      buttonStyle={{
        backgroundColor: '#3498db',
        color: '#fff',
        borderRadius: '5px',
      }}
      declineButtonStyle={{
        backgroundColor: '#e74c3c',
        color: '#fff',
        borderRadius: '5px',
      }}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      <div className="fixed bottom-0 w-full bg-gray-800 text-white text-center py-4 shadow-md animate-slide-in">
        This website uses cookies to enhance the user experience.{' '}
        <a href="/cookie-policy" className="text-blue-400 underline ml-1">
          Learn more
        </a>
        <button
          onClick={handleAccept}
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Decline
        </button>
      </div>
    </CookieConsent>
  )
}

export default CookieBanner
