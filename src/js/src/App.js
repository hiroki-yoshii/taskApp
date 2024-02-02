import logo from './logo.svg';
import FrappeGantt from './components/FrappeGantt';
import './App.css';

function App() {
  const tasks = [
    {
        id: 'Task 1',
        name: 'Demo Task 1',
        start: '2023-01-01',
        end: '2023-01-05',
        progress: 20,
        dependencies: ''
    },
    {
        id: 'Task 2',
        name: 'Demo Task 2',
        start: '2023-01-03',
        end: '2023-01-08',
        progress: 60,
        dependencies: 'Task 1'
    }
];
return (
  <div className="App">
      <h1>React Gantt Chart</h1>
      <FrappeGantt tasks={tasks} />
  </div>
);
}

export default App;
