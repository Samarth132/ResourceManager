CREATE TABLE Departments(
    deptId VARCHAR(50) PRIMARY KEY,
    deptName VARCHAR(50) NOT NULL
);

CREATE TABLE Semesters(
    semId INTEGER PRIMARY KEY,
    deptId VARCHAR(50),
    semName VARCHAR(50) NOT NULL,
    FOREIGN KEY(deptId) REFERENCES Departments(deptId)
);

CREATE TABLE Resources(
    resId VARCHAR(50) PRIMARY KEY,
    semId INTEGER,
    resName VARCHAR(50) NOT NULL,
    resLink VARCHAR(255) NOT NULL,
    resDesc VARCHAR(255),
    FOREIGN KEY(semId) REFERENCES Semesters(semId)
);

CREATE TABLE Notices(
    noticeId VARCHAR(50),
    deptId VARCHAR(50),
    noticeName VARCHAR(50) NOT NULL,
    noticeLink VARCHAR(255) NOT NULL,
    noticeDesc VARCHAR(255),
    FOREIGN KEY(deptId) REFERENCES Departments(deptId)
);

CREATE TABLE Users(
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);
