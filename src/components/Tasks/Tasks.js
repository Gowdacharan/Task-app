import React, { useState } from 'react';
import './Tasks.css';
import Collapsible from '../Collapsible/Collapsible';
import TaskCreator from './TaskCreator';
import TaskList from './TaskList';

function Tasks() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>
          <div className="create-button-container">
            {!isNewTaskOpen ? (
              <button
                className="button create-button"
                onClick={() => {
                  setIsNewTaskOpen(!isNewTaskOpen);
                }}
              >
                <i className="fa fa-calendar-plus"></i>
                &nbsp;&nbsp;
                Create
              </button>
            ) : null}
          </div>
        </div>
        <Collapsible isOpen={isNewTaskOpen}>
          <TaskCreator />
        </Collapsible>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <i className="fa fa-search"></i>
        </div>
        <TaskList search={search} /> {/*iam Passing the search prop to TaskList */}
      </div>
    </div>
  );
}

export default Tasks;
