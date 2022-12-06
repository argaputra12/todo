import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import PlusButton from 'components/PlusButton';
import Form from 'components/Form';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  return(
    <main className='container relative bg-darkPurple mx-auto max-w-lg p-4 box-border min-h-screen'>
      <Header />
      <TaskList />
      <PlusButton onClick={() => setShowForm(!showForm)} />
      <Form 
        inProp={showForm} onClose={() => setShowForm(false)}
      />
    </main>
  );

}

export default App;
