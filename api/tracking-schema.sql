CREATE TABLE users(
    user_id             SERIAL PRIMARY KEY, 
    name                TEXT, 
    password            TEXT, 
    status              TEXT, 
    associated_clients  TEXT 
); 

CREATE TABLE projects(
    project_id     SERIAL PRIMARY KEY, 
    project_name   TEXT,
    start_time     TIME, 
    end_time       TIME
); 

CREATE TABLE projectIsON(
    projectOn_id   SERIAL PRIMARY KEY, 
    user_ID        INTEGER NOT NULL, 
    projectId      INTEGER NOT NULL, 
    FOREIGN KEY (user_ID) REFERENCES users(user_id),
    FOREIGN KEY (projectId) REFERENCES projects(project_id)
);

CREATE TABLE timesheet (
    timesheet_id  SERIAL PRIMARY KEY, 
    user_ID    INTEGER NOT NULL,
    time_record TIMESTAMP DEFAULT NOW(), 
    FOREIGN KEY (user_ID) REFERENCES users(user_id)
);