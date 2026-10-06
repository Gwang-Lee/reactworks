// Drinks의 하위 컴포넌트 정의
const DrinkList = ({drinklist}) => {
    console.log(drinklist);
    
    return(
        <div>
            <h2>음료 목록</h2>
                <ul >
                    {drinklist.map((drink, index)=> (
                        <li key={index}>{drink} </li>
                    ))}
                </ul>
        </div>
    )
}

export default DrinkList;