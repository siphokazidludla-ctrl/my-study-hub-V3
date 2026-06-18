import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import UnitsPage from "./pages/UnitsPage";
import UnitDetailPage from "./pages/UnitDetailPage";
import TheoriesPage from "./pages/TheoriesPage";
import TheoryDetailPage from "./pages/TheoryDetailPage";
import CaseAnalyzerPage from "./pages/CaseAnalyzerPage";
import ExamBuilderPage from "./pages/ExamBuilderPage";
import ParagraphBankPage from "./pages/ParagraphBankPage";
import PastPapersPage from "./pages/PastPapersPage";
import ChecklistPage from "./pages/ChecklistPage";
import CommandWordsPage from "./pages/CommandWordsPage";
import {
  MotivationPage,
  LeadershipPage,
  CultureChangePage,
  ConflictPowerPoliticsPage,
  StressWellbeingPage,
} from "./pages/HubRoutes";
import NotFound from "../pages/NotFound";

export default function OrbApp() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="units" element={<UnitsPage />} />
        <Route path="units/:unitId" element={<UnitDetailPage />} />
        <Route path="theories" element={<TheoriesPage />} />
        <Route path="theories/:theoryId" element={<TheoryDetailPage />} />
        <Route path="case-analyzer" element={<CaseAnalyzerPage />} />
        <Route path="motivation" element={<MotivationPage />} />
        <Route path="leadership" element={<LeadershipPage />} />
        <Route path="culture-change" element={<CultureChangePage />} />
        <Route path="conflict-power-politics" element={<ConflictPowerPoliticsPage />} />
        <Route path="stress-wellbeing" element={<StressWellbeingPage />} />
        <Route path="exam-builder" element={<ExamBuilderPage />} />
        <Route path="paragraph-bank" element={<ParagraphBankPage />} />
        <Route path="past-papers" element={<PastPapersPage />} />
        <Route path="command-words" element={<CommandWordsPage />} />
        <Route path="checklist" element={<ChecklistPage />} />
        {/* 404 inside the ORB hub */}
        <Route path="*" element={<NotFound homeTo="/ob" homeLabel="Back to ORB hub" />} />
      </Route>
    </Routes>
  );
}
