import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WorkLawView from '@/views/Articles/WorkLawView.vue'
import SocialSecurityLawView from '@/views/Articles/SocialSecurityLawView.vue' 
import SalaryView from '@/views/Articles/SalaryView.vue' 
import AuditComplianceView from '@/views/Articles/AuditComplianceView.vue' 
import WorkPermitView from '@/views/Articles/WorkPermitView';
import PersonnelView from '@/views/Articles/PersonnelView.vue';
import PayrollView from '@/views/Articles/PayrollView.vue';
import CorrespondenceView from '@/views/Articles/CorrespondenceView.vue';
import FormationView from '@/views/Articles/FormationView.vue'
import AuditRhView from '@/views/Articles/AuditRhView.vue'
import AdminRhView from '@/views/Articles/AdminRhView.vue'
import CounselView from '@/views/Articles/CounselView.vue'
import StatisticsView from '@/views/StatisticsView.vue'
import ApplicationFormView from '@/views/ApplicationFormView.vue'
import JobOfferesView from '@/views/JobOfferesView.vue'
import ContactView from '@/views/ContactView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/qui-somme-nous',
    name: 'qui-somme-nous',
    component: AboutView
  },
  {
    path: '/article/droit-travail',
    name: 'droit-travail',
    component: WorkLawView
  },
  {
    path: '/article/droit-securite-sociale',
    name: 'droit-securite-sociale',
    component: SocialSecurityLawView
  },
  {
    path: '/article/fiscalite-salariale',
    name: 'fiscalite-salariale',
    component: SalaryView
  },
  {
    path: '/article/audit-conformite',
    name: 'audit-conformite',
    component: AuditComplianceView
  } ,
  {
    path: '/article/audit-rh',
    name: 'audit-rh',
    component: AuditRhView
  } ,  
  {
    path: '/article/admin-rh',
    name: 'admin-rh',
    component: AdminRhView
  } ,
  {
    path: '/article/permis-travail',
    name: 'permis-travail',
    component: WorkPermitView
  },
  {
    path: '/article/gestion-personnel',
    name: 'gestion-personnel',
    component: PersonnelView
  },
  {
    path: '/article/gestion-paie',
    name: 'gestion-paie',
    component: PayrollView
  },
  {
    path: '/article/correspondance-sociale',
    name: 'correspondance-sociale',
    component: CorrespondenceView
  },
  {
    path: '/article/formation',
    name: 'formation',
    component: FormationView
  },
  {
    path: '/article/conseil',
    name: 'conseil',
    component: CounselView
  },
  {
    path: '/statistiques',
    name: 'statistiques',
    component: StatisticsView
  },
  {
    path: '/candidature-spontanee',
    name: 'candidature-spontanee',
    component: ApplicationFormView
  },
  {
    path: '/offres-emploi',
    name: 'offres-emploi',
    component: JobOfferesView
  },
  {
    path: '/offres/drh',
    name: '/offres/drh',
    component: JobOfferesView
  },
  {
    path: '/contact',
    name: '/contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
