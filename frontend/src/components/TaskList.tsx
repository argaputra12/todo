import React from "react";
import TaskCard from "./TaskCard";

const TaskList : React.FC = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden overflow-y-auto rounded h-taskList scrollbar-hide">
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
            <TaskCard title="Task 1" description="This is a description for task 1" />
        </div>
    );
}
export default TaskList;