export default function DisplayingData() {
    const user = {
        name: 'John Doe',
        age: 25,
        img: 'https://www.fotografieren24.de/wp-content/uploads/2023/01/portrait-fotografieren24_00008-1024x682.jpg'
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <img src={user.img} alt="user" />
        </div>
    )
}