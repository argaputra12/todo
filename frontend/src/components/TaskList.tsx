import React from "react";
import TaskCard from "./TaskCard";

import { useQuery } from "react-query";
import { getTodos } from "api/getTodos";

const TaskList : React.FC = () => {

    const {isLoading, isError, error, data} = useQuery("todos", getTodos); 

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-col w-full overflow-x-hidden overflow-y-auto rounded h-taskList scrollbar-hide">
            {data?.todos.map((todo) => (
                <TaskCard key={todo._id} title={todo.title} description={todo.description} status={todo.status} taskId={todo._id}/>
            ))}
        </div>
    );
}
export default TaskList;