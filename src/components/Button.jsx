import './Button.css'

function Button({ text, onClick, variant = 'primary', size = 'md' }) {
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
