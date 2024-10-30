# Task Management Angular Project

## Overview

This project is an Angular-based task management application. It allows users to create, view, and manage tasks associated with different user IDs.

## Features

- View tasks filtered by user ID
- Add new tasks
- Remove existing tasks
- Persistent storage using localStorage

## Project Structure

The main component of this project is the `TasksService`, which handles the core functionality of task management.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `ng serve` to start the development server
5. Open your browser and navigate to `http://localhost:4200`

## Usage

The `TasksService` provides the following methods:

- `getTasksByUserId(userId: string)`: Retrieves tasks for a specific user
- `addTask(task: INewTask)`: Adds a new task
- `removeTask(id: string)`: Removes a task by its ID

## Data Persistence

Tasks are stored in the browser's localStorage, allowing data to persist between sessions.

## Contact
Mohamed Bakr - m.salahbakr2000@gmail.com

Project Link: https://superb-smakager-7ce2f9.netlify.app
