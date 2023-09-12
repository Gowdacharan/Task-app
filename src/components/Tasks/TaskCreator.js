import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../actions';

function TaskCreator() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDateTime, setTaskDateTime] = useState('');

  const dispatch = useDispatch();

  const onSaveClick = () => {
    dispatch(
      actions.createTask({
        id: Math.floor(Math.random() * 10000000),
        taskTitle: taskTitle,
        taskDateTime: taskDateTime,
      })
    );
    setTaskTitle('');
    setTaskDateTime('');
  };

  return (
    <div className="new-task-container">
      <h4 className="new-task-title">New Task</h4>
      {/* form group starts */}
      <div className="form-group">
        <label className="form-label" htmlFor="task-title">
          Task Title:
        </label>
        <div className="form-input">
          <input
            type="text"
            placeholder="Task Title"
            className="text-box"
            id="task-title"
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
          />
        </div>
      </div>
      {/* form group ends */}
      {/* form group starts */}
      <div className="form-group">
        <label className="form-label" htmlFor="task-date-time">
          Task Date and Time:
        </label>
        <div className="form-input">
          <input
            type="datetime-local"
            placeholder="Task Date and Time"
            className="text-box"
            id="task-date-time"
            value={taskDateTime}
            onChange={(e) => {
              setTaskDateTime(e.target.value);
            }}
          />
        </div>
      </div>
      {/* form group ends */}
      <div className="button-group">
        <button className="button save-button" onClick={onSaveClick}>
          <i className="fa fa-save"></i>&nbsp;&nbsp; Save Task
        </button>
      </div>
    </div>
  );
}

export default TaskCreator;
