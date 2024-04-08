
type Props = {
    handleClick: ( ) =>void
}



const Dog = ({handleClick}: Props) => {
  return (
    // <div style={{cursor:'pointer'}} onClick={handleClick}>
        <img src='assets/dog.gif' style={{cursor:'pointer'}} onClick={handleClick}/>
    // </div>
  )
}

export default Dog