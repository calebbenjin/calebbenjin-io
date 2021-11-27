
type NavProps = {
  name: string,
}

const Navbar = (props: NavProps) => {
  return (
    <div>
      <h2>Hello this is {props.name}</h2>
    </div>
  )
}

export default Navbar
