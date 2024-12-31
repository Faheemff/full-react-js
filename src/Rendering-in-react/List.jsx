function List() {
    const numbers = [1, 2, 3, 4, 5];
    const newNumber = numbers.map((number) => {
        return number;
    })
    return (
        <ul>
            <li key={numbers}>{newNumber.map((e)=> {
                return e ;
            })}</li>
        </ul>
    );
}

export default List;
