
import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './components/contact/contact';
import { Education } from './education/education';
import { Experience } from './experience/experience';


export const routes: Routes = [

{
 path:'',component:Home},

{path:'about',component:About},

{path:'skills',component:Skills},

{path:'projects',component:Projects},

{path:'contact',component:Contact},
{path:'experience',component:Experience},
{path: 'education',component:Education},

];