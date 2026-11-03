const root = ReactDOM.createRoot(document.getElementById("root"));

// const container = document.getElementById("container");
const header = <div className={"profile-header"}>
    <img src="./InterlockingMindsofDiscovery.png" alt="photo" className={"profile-image"}/>
    <h1 className={"profile-title"}>Мой Учебный Профиль</h1>
</div>
const college = 'Tel-Ran';
const lessonsTotal = 110;
const lessonsCompleted = 37;
const student ={
  name: 'Ana Cip',
  age: 35,
  city: 'Tel-Aviv',
  course: 'Full Stack Developer',
  lessonsLeft: lessonsTotal - lessonsCompleted,
}

const fragment = <>
  {header}
  <p className="profile-row">
    <span className="label">Имя: </span>
    <span className="value">{student.name}</span>
  </p>
  <p className="profile-row">
    <span className="label">Возраст: </span>
    <span className="value">{student.age}</span>
  </p>
    <p className="profile-row">
    <span className="label">Учебное заведение: </span>
    <span className="value">{college}</span>
  </p>
  <p className="profile-row">
    <span className="label">Город: </span>
    <span className="value">{student.city}</span>
  </p>
  <p className="profile-row">
    <span className="label">Курс: </span>
    <span className="value">{student.course}</span>
  </p>
    <br />
  <p className="profile-row" style={{fontSize: 35}}>
    {/*profile_row = in CSS is 25px => inline style has priority above CSS*/}
    <span className="label">Пройдено уроков:</span>
    <span className="value">{lessonsCompleted}</span>
  </p>
    <p className="profile-row" style={{fontSize: 35}}>
    <span className="label">Осталось уроков:</span>
    <span className="value">{student.lessonsLeft}</span>
  </p>
</>

root.render(fragment);