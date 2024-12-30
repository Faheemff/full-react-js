function List() {
    const numbers = [1, 2, 3, 4, 5];
    const newNumber = numbers.map((number) => {
        return number * 2;
    })
    return (
        <ul>
            <li key={newNumber}>{newNumber}</li>
        </ul>
    );
}

export default List;
