import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from "pages/HomePage";
import WorkoutsPage from "pages/WorkoutsPage";
import ProfilePage from "pages/ProfilePage";
import AddWorkoutPage from "pages/AddWorkoutPage";
import EditWorkoutPage from "pages/EditWorkoutPage";
import CalendarPage from "pages/CalendarPage";
import AddSchedulePage from "pages/AddSchedulePage";
import EditSchedulePage from "pages/EditSchedulePage";
import ViewWorkoutPage from "pages/ViewWorkoutPage";
import ViewSchedulePage from "pages/ViewSchedulePage";
import ExercisesPage from "pages/ExercisesPage";
import ViewExercisePage from "pages/ViewExercisePage";
import SchedulesPage from "pages/SchedulesPage";

import DuplicateWorkoutPage from "pages/DuplicateWorkoutPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/exercises/view/:id" element={<ViewExercisePage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/workouts/add" element={<AddWorkoutPage />} />
          <Route path="/workouts/duplicate" element={<DuplicateWorkoutPage />} />
          <Route path="/workouts/edit/:id" element={<EditWorkoutPage />} />
          <Route path="/workouts/view/:id" element={<ViewWorkoutPage />} />
          <Route path="/schedules" element={<SchedulesPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/schedules/add" element={<AddSchedulePage />} />
          <Route path="/schedules/edit/:id" element={<EditSchedulePage />} />
          <Route path="/schedules/view/:id" element={<ViewSchedulePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
