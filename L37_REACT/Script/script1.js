// import "../CSS/app.css"

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const hello = <h1>Наш учебный центр</h1>;

  const title = <div>
    <h1>Учебный центр</h1>
    <br/>
    <hr/>
    <img src="XXX.jpg" alt="photo"/>
    <p>Добро пожаловать</p>
  </div>

  const a = 10;
  const b = 20;
  const college ="tel-Ran"
  const address = {
    city: "Tel-Aviv",
    state: "Center",
    street: "Ramat haSharon",
    number: 123,
  }

  const age=25;
  const myStyle = {
    color: "green",
    fontSize: "30px"
  }


const fragment = <>
  <h1 style={{color: "red"}} >Учебный центр2 {college.toUpperCase()}</h1>
  <p style={{color: "blue", fontSize: "50px"}} >Добро пожаловать2, сумма = {a+b}</p>
  <p>City {address.city}</p>
  <p>Street {address.street}</p>
  <p style={myStyle}  >Age {age}</p>
  <p>{age >=18 ? "Adult" : "Child"}</p>


</>

root.render(fragment);


// const studentNameElement = <h1>Привет, {studentName}!;//Error2
// const studentNameElement = <h1>Привет, studentName!</h1>; //Error1
//  const studentNameElement = <h1>Привет, {studentName}!</h1>;
// root.render(studentNameElement);
// <p>City {address}</p> // ERROR объект выводится поэлементно
// const studentNameElement = <h1> Hey, studentName!</h1> Error -> {studentName}
// <p> {if (age >=18) "Adult"} </p> if писать нельзя - не будет работать
// центр2 {college.toUpperCase()}</h1> // ERROR - для стиле надо указывать объект со свойствами



