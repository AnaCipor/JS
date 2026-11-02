const root = ReactDOM.createRoot(document.getElementById('root'));

const Task = ({children}) => {

  const handleClickEdit = () => {
    alert(`Edit clicked ${children}`);
  }

  const handleClickDelete = () => {
    alert(`Delete task ${children}`);
  }
  
  return (
    <div className={'box'}>
      <div> {children}</div>
    <button onClick={handleClickEdit} className={'btn light'}>Edit</button>
    <button onClick={handleClickDelete} className={'btn red'}>Remove</button>

  </div>
  )
};

root.render(
  <div className={'field'}>
    <Task>My Task1</Task>
    <Task>My Task2</Task>
    <Task>My Task3</Task>
  </div>
);


