import './styles.css';

const Input = ({ user, setUser }) => {
  return (
    <input
    name ="usuario"
    value={user}
    onChange={event => setUser(event.target.value)}
    placeholder="@usuário" />
  )
}

export { Input };