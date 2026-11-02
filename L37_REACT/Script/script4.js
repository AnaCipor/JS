const root = ReactDOM.createRoot(document.getElementById("root"));

const Student = ({name, age}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>age: {age?? 'unknown'}</p>
    </div>
  )
};


//       <p>age: {age ? age: 'unknown'}</p> 2nd option to write

root.render(
  <>
    <Student name= {'John'} age ={20}/>
    <Student name = {'Peter'} age = {30} />
    <Student name = {'Mary'} />

  </>
);