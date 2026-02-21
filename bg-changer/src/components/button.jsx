
const Button = (props) => {
  return (
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button name={props.name} onClick={props.f} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:props.name}}>{props.name}</button>
    </div>
  )
}

export default Button