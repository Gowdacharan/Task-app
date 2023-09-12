import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';

function TaskList({ search }) {
  const tasks = useSelector((state) =>
    state.tasks.filter((task) =>
      task.taskTitle.toLowerCase().includes(search.toLowerCase())
    )
  );

  const dispatch = useDispatch();

  const onDeleteClick = (task) => {
    if (window.confirm('Are you sure to delete this task')) {
      dispatch(actions.deleteTask(task.id));
    }
  };

  return (
    <div className="content-body">
      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <div className="task-body">
            <div className="task-title">
              <i className="fa fa-thumbtack"></i>
              <span className="task-title-text">{task.taskTitle}</span>
            </div>
            <div className="task-subtitle">
              <i className="far fa-clock"></i>{' '}
              <span className="task-subtitle-text">{task.taskDateTime}</span>
            </div>
          </div>
          <div className="task-options">
            <button
              className="icon-button"
              title="Delete"
              onClick={() => {
                onDeleteClick(task);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
