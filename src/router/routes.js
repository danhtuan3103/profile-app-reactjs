import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import About from '~/pages/About';
import Project from '~/pages/Project';
import Question from '~/pages/Question';
import NoHeaderLayout from '~/layouts/NoHedearLayout';
const publicRoute = [
    { path: '/', component: Home },
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: 'project', component: Project },
    { path: 'project?:slug', component: Project },
    { path: 'question', component: Question },
];

const privateRoute = [];

export { publicRoute, privateRoute };
