import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WorkLawView from '@/views/Articles/WorkLawView.vue'
import SocialSecurityLawView from '@/views/Articles/SocialSecurityLawView.vue' 
import SalaryView from '@/views/Articles/SalaryView.vue' 
import AuditView from '@/views/Articles/AuditView.vue' 
import WorkPermitView from '@/views/Articles/WorkPermitView';
import PersonnelView from '@/views/Articles/PersonnelView.vue';
import PayrollView from '@/views/Articles/PayrollView.vue';
import CorrespondenceView from '@/views/Articles/CorrespondenceView.vue';
import FormationView from '@/views/Articles/FormationView.vue'

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
    path: '/article/audit',
    name: 'audit',
    component: AuditView
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
