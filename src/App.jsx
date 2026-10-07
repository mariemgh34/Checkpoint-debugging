import { useState } from "react";

import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  // User information
  const [user] = useState({
    name: "Sarah",
    role: "Student",
  });

  // Counter state
  const [count, setCount] = useState(0);

  // Todo state
  const [todos] = useState([
    {
      id: 1,
      text: "Learn React Developer Tools",
      completed: true,
    },
    {
      id: 2,
      text: "Debug the application",
      completed: false,
    },
    {
      id: 3,
      text: "Write the debugging report",
      completed: true,
    },
  ]);

  // Increase counter
  function increaseCounter() {
    setCount(count+1);
  }

  return (
    <div className="app">
      <Header username={user.name} />

      <main>
        <UserProfile
          user={user}
          
        />

        <Counter
          count={count}
          onIncrease={increaseCounter}
        />

        <TodoList todos={todos} />
      </main>
    </div>
  );
}

export default App;