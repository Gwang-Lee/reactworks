
const Dog = (props) => {
    return(
    <div>
        <h2>강아지</h2>
        <p>품종: {props.breed}</p>
        <p>품종: {props.age}</p>
    </div>
    )
}

export default Dog