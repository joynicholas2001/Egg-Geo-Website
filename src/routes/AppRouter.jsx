import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ScrollToTop from '../components/ScrollToTop';

// Lazy loaded pages
const Home = lazy(() => import('../pages/Home'));
const ServiceDetailPage = lazy(() => import('../pages/ServiceDetailPage'));
const ServiceOverviewPage = lazy(() => import('../pages/ServiceOverviewPage'));
const FeasibilityStudiesPage = lazy(() => import('../pages/FeasibilityStudiesPage'));
const MasterPlanningPage = lazy(() => import('../pages/MasterPlanningPage'));
const DesignPage = lazy(() => import('../pages/DesignPage'));
const OwnerRepresentationPage = lazy(() => import('../pages/OwnerRepresentationPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NewsOverview = lazy(() => import('../pages/NewsOverview'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const TeamPage = lazy(() => import('../pages/TeamPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const CareersPage = lazy(() => import('../pages/CareersPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const CompanyOverview = lazy(() => import('../pages/CompanyOverview'));
const NotFound = lazy(() => import('../pages/NotFound'));
const KidsCornerPage = lazy(() => import('../pages/KidsCornerPage'));
const ActivityBooksPage = lazy(() => import('../pages/ActivityBooksPage'));

// Simple loading spinner for page transitions
const PageLoader = () => (
  <div className="flex h-[60vh] w-full items-center justify-center">
    <div className="w-12 h-12 border-4 border-light border-t-primary rounded-full animate-spin"></div>
  </div>
);

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />

            {/* Technical Services */}
            <Route path="technical-services" element={<ServiceOverviewPage sectionKey="technical-services" />} />
            <Route path="technical-services/feasibility-studies" element={<FeasibilityStudiesPage />} />
            <Route path="technical-services/master-planning" element={<MasterPlanningPage />} />
            <Route path="technical-services/design" element={<DesignPage />} />
            <Route path="technical-services/owner-representation" element={<OwnerRepresentationPage />} />

            {/* Education Services */}
            <Route path="education-services" element={<ServiceOverviewPage sectionKey="education-services" />} />
            <Route path="education-services/publications" element={<ServiceDetailPage slug="publications" />} />
            <Route path="education-services/seminars" element={<ServiceDetailPage slug="seminars" />} />
            <Route path="education-services/kids-corner" element={<KidsCornerPage />} />
            <Route path="education-services/activity-books" element={<ActivityBooksPage />} />

            {/* News */}
            <Route path="news" element={<NewsOverview />} />
            <Route path="news/industry" element={<NewsPage slug="industry" />} />
            <Route path="news/mission-statement" element={<NewsPage slug="mission-statement" />} />
            <Route path="news/egg-geo" element={<NewsPage slug="egg-geo" />} />

            {/* Defining The Future */}
            <Route path="defining-the-future" element={<ServiceOverviewPage sectionKey="defining-the-future" />} />
            <Route path="defining-the-future/emerging-technology-advocacy" element={<ServiceDetailPage slug="emerging-technology-advocacy" />} />
            <Route path="defining-the-future/code-development" element={<ServiceDetailPage slug="code-development" />} />
            <Route path="defining-the-future/resources" element={<ServiceDetailPage slug="resources" />} />

            {/* Company */}
            <Route path="company" element={<CompanyOverview />} />
            <Route path="company/about-egg-geo" element={<AboutPage />} />
            <Route path="company/our-team" element={<TeamPage />} />
            <Route path="company/projects" element={<ProjectsPage />} />
            <Route path="company/careers" element={<CareersPage />} />

            {/* Contact */}
            <Route path="contact" element={<ContactPage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
