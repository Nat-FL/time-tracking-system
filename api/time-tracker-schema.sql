CREATE TABLE users(
    user_id             SERIAL PRIMARY KEY, 
    name                TEXT NOT NULL, 
    password            TEXT NOT NULL, 
    status              TEXT NOT NULL, 
    associated_clients  TEXT NOT NULL
); 

CREATE TABLE projects(
    project_id     SERIAL PRIMARY KEY, 
    project_name   TEXT NOT NULL, 
    user_ID    INTEGER NOT NULL, 
    user_Name  TEXT NOT NULL, 
    FOREIGN KEY (user_ID) REFERENCES users(user_id),
    FOREIGN KEY (user_Name) REFERENCES users(name)
); 

CREATE TABLE timesheet (
    timesheet_id  SERIAL PRIMARY KEY, 
    user_ID    INTEGER NOT NULL,
    time_record TIMESTAMP DEFAULT NOW(), 
    FOREIGN KEY (user_ID) REFERENCES users(user_id),
)