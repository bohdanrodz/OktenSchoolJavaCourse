import './App.css'

const coursesTitleArray:string[] = [
  'JavaScript Complex',
  'Java Complex',
  'Python Complex',
  'QA Complex',
  'Fullstack',
  'Frontend'
];

function App() {

  return (
    <>
      <ul>
        {
          coursesTitleArray.map((course, index) => (<li key={index} className={'text-red-500 bg-black mb-3'}>{course}</li>))
        }
      </ul>
    </>
  )
}

export default App
