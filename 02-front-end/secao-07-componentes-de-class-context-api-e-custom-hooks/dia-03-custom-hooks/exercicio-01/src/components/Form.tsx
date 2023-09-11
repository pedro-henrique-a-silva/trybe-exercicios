
type FormProps = {
  handleToggle: () => void
}

function Form(props: FormProps) {
  const { handleToggle } = props
  return (
    <form>
      <input type="text"/>
      <input type="text"/>
      <button onClick={handleToggle}>Finalizar</button>
    </form>
  )
}

export default Form