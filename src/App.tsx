import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ModuleHomePage from "./pages/ModuleHomePage";
import UnitsPage from "./pages/UnitsPage";
import UnitDetailPage from "./pages/UnitDetailPage";
import TheoriesPage from "./pages/TheoriesPage";
import TheoryDetailPage from "./pages/TheoryDetailPage";
import CasesPage from "./pages/CasesPage";
import CaseDetailPage from "./pages/CaseDetailPage";
import PastPapersPage from "./pages/PastPapersPage";
import PastPaperDetailPage from "./pages/PastPaperDetailPage";
import ExamBuilderPage from "./pages/ExamBuilderPage";
import ParagraphBankPage from "./pages/ParagraphBankPage";
import ChecklistPage from "./pages/ChecklistPage";
import CommandWordsPage from "./pages/CommandWordsPage";
import ReferencesPage from "./pages/ReferencesPage";
import FormulasPage from "./pages/FormulasPage";
import FormulaLibraryPage from "./pages/FormulaLibraryPage";
import FormulaDetailPage from "./pages/FormulaDetailPage";
import AppliedCalculationsPage from "./pages/AppliedCalculationsPage";
import CalculatorHubPage from "./pages/CalculatorHubPage";
import QuestionClassifierPage from "./pages/QuestionClassifierPage";
import MistakeLogPage from "./pages/MistakeLogPage";
import ConceptsPage from "./pages/ConceptsPage";
import ConceptDetailPage from "./pages/ConceptDetailPage";
import OrbApp from "./ob/OrbApp";

// --- Marketing pages (were built but never routed) ---
import LandingPage from "./pages/marketing/LandingPage";
import PricingPage from "./pages/marketing/PricingPage";
import FeaturesPage from "./pages/marketing/FeaturesPage";
import AboutPage from "./pages/marketing/AboutPage";
import ContactPage from "./pages/marketing/ContactPage";
import DisclaimerPage from "./pages/marketing/DisclaimerPage";
import PrivacyPage from "./pages/marketing/PrivacyPage";
import TermsPage from "./pages/marketing/TermsPage";

// --- Auth pages (were built but never routed) ---
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import AccountPage from "./pages/auth/AccountPage";
import CheckoutPage from "./pages/auth/CheckoutPage";

// --- 404 ---
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      {/* ORB801 runs as its own sub-app */}
      <Route path="/ob/*" element={<OrbApp />} />

      {/* Standalone marketing pages (no study layout) */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/disclaimer" element={<DisclaimerPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />

      {/* Standalone auth pages (no study layout) */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      {/* Study app */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/command-words" element={<CommandWordsPage />} />
        <Route path="/references" element={<ReferencesPage />} />

        <Route path="/:moduleId" element={<ModuleHomePage />} />

        <Route path="/:moduleId/units" element={<UnitsPage />} />
        <Route path="/:moduleId/units/:unitId" element={<UnitDetailPage />} />

        <Route path="/:moduleId/theories" element={<TheoriesPage />} />
        <Route path="/:moduleId/theories/:theoryId" element={<TheoryDetailPage />} />

        <Route path="/:moduleId/concepts" element={<ConceptsPage />} />
        <Route path="/:moduleId/concepts/:conceptId" element={<ConceptDetailPage />} />

        <Route path="/:moduleId/cases" element={<CasesPage />} />
        <Route path="/:moduleId/cases/:caseId" element={<CaseDetailPage />} />

        <Route path="/:moduleId/past-papers" element={<PastPapersPage />} />
        <Route path="/:moduleId/past-papers/:paperId" element={<PastPaperDetailPage />} />

        <Route path="/:moduleId/exam-builder" element={<ExamBuilderPage />} />
        <Route path="/:moduleId/paragraph-bank" element={<ParagraphBankPage />} />
        <Route path="/:moduleId/checklist" element={<ChecklistPage />} />

        <Route path="/:moduleId/formulas" element={<FormulasPage />} />
        <Route path="/:moduleId/formula-library" element={<FormulaLibraryPage />} />
        <Route path="/:moduleId/formulas/:formulaId" element={<FormulaDetailPage />} />

        <Route path="/:moduleId/applied-calculations" element={<AppliedCalculationsPage />} />
        <Route path="/:moduleId/calculator" element={<CalculatorHubPage />} />
        <Route path="/:moduleId/calculators" element={<CalculatorHubPage />} />
        <Route path="/:moduleId/calculators/:formulaId" element={<CalculatorHubPage />} />

        <Route path="/:moduleId/question-classifier" element={<QuestionClassifierPage />} />
        <Route path="/:moduleId/mistake-log" element={<MistakeLogPage />} />

        {/* 404 fallback inside the study layout */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
