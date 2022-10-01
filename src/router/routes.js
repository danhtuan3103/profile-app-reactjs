import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import About from '~/pages/About';
import Project from '~/pages/Project';
import Question from '~/pages/Question';
import Error from '~/pages/Error';
import Todolist from '~/pages/Todolist';
import NoHeaderLayout from '~/layouts/NoHedearLayout';
const publicRoute = [
    { path: '/', component: Home },
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: 'project', component: Project },
    { path: 'project?:slug', component: Project },
    { path: 'question', component: Question },
    { path: '*', component: Error, layout: NoHeaderLayout },

    // TODOLIST APP
    { path: 'todolist-app', component: Todolist, layout: NoHeaderLayout },
    { path: 'todolist-app/create', component: Todolist, layout: NoHeaderLayout },
    { path: 'todolist-app/schedule', component: Todolist, layout: NoHeaderLayout },
    { path: 'todolist-app/today', component: Todolist, layout: NoHeaderLayout },
    { path: 'todolist-app/dayly', component: Todolist, layout: NoHeaderLayout },
    { path: 'todolist-app/monthly', component: Todolist, layout: NoHeaderLayout },
    { path: 'todolist-app/goals', component: Todolist, layout: NoHeaderLayout },
];

const privateRoute = [];

export { publicRoute, privateRoute };
