
type Props = {
    handleClick?: ( ) =>void
    width?:string
}



const Dog = ({handleClick,width}: Props) => {
  return (
    // <div style={{cursor:'pointer'}} onClick={handleClick}>
        <img src='assets/dog.gif' style={{cursor:'pointer'}} onClick={handleClick} width={width}/>
    // </div>
  )
}

export default Dog