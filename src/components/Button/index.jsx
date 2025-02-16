import './styles.css';

const Button = ({onClick, valor}) => {
  return (
    <button onClick={onClick}>
      {valor}
    </button>
  )
}

export { Button };