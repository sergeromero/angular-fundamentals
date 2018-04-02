import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

export const userRoutes = [
    {path: 'profile', component: ProfileComponent}, // the route in fact is /user/profile
    {path: 'login', component: LoginComponent},
];
