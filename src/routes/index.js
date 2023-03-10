import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as FeatherIcon from 'react-feather';

import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
// dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard'));
// apps
const CalendarApp = React.lazy(() => import('../pages/apps/Calendar'));
const Campaign = React.lazy(() => import('../pages/apps/Campaign'))
const EmailInbox = React.lazy(() => import('../pages/apps/Email/Inbox'));
const EmailDetail = React.lazy(() => import('../pages/apps/Email/Detail'));
const EmailCompose = React.lazy(() => import('../pages/apps/Email/Compose'));
const ProjectList = React.lazy(() => import('../pages/apps/Project/List'));
const ProjectDetail = React.lazy(() => import('../pages/apps/Project/Detail/'));
const TaskList = React.lazy(() => import('../pages/apps/Tasks/List'));
const TaskBoard = React.lazy(() => import('../pages/apps/Tasks/Board'));
const ChatPage = React.lazy(() => import('../pages/apps/LiveChat/index'));
const ChatFlux = React.lazy(() => import('../pages/apps/ChatFlux/index'));
const Audience = React.lazy(() => import('../pages/apps/Audience/index'))
const Settings = React.lazy(() => import("../pages/apps/SettingsPage/index"))
const Transmission = React.lazy(() => import('../pages/apps/Transmission/index'));
const Flow = React.lazy(() => import("../pages/apps/Flow/index"))

// pages
const Starter = React.lazy(() => import('../pages/other/Starter'));
const Profile = React.lazy(() => import('../pages/other/Profile/'));
const Activity = React.lazy(() => import('../pages/other/Activity'));
const Invoice = React.lazy(() => import('../pages/other/Invoice'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));
const Error404 = React.lazy(() => import('../pages/other/Error404'));
const Error500 = React.lazy(() => import('../pages/other/Error500'));

// ui
const BSComponents = React.lazy(() => import('../pages/uikit/BSComponents/'));
const FeatherIcons = React.lazy(() => import('../pages/uikit/Icons/Feather'));
const UniconsIcons = React.lazy(() => import('../pages/uikit/Icons/Unicons'));
const Widgets = React.lazy(() => import('../pages/uikit/Widgets/'));

// charts
const Charts = React.lazy(() => import('../pages/charts/'));

// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editor = React.lazy(() => import('../pages/forms/Editor'));

// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));

const userIns = localStorage.getItem('userIns');

// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    
    <Route
        {...rest}
        render={(props) => {
            if (!isUserAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
            // check if route is restricted by role
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                // role not authorised so redirect to home page
                return <Redirect to={{ pathname: `/` }} />;
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to={`/${userIns}/dashboard`} />,
    route: Route,
};

// dashboards
const dashboardRoutes = {
    path: '/dashboard',
    name: 'Painel de Controle',
    icon: FeatherIcon.Sliders,
    component: Dashboard,
    route: PrivateRoute,
};

const audienceRoutes = {
    path: '/audiencce',
    name: 'Audi??ncia',
    icon: FeatherIcon.Users,
    component: Audience,
    route: Route,
};

// apps

const calendarAppRoutes = {
    path: '/calendar',
    name: 'Calendario',
    icon: FeatherIcon.Mail,
    component: CalendarApp,
    route: Route,
};

const campaignAppRoutes = {
    path: '/campaign',
    name: 'Campanha',
    icon: FeatherIcon.Book,
    component: Campaign,
    route: Route,
};

const emailAppRoutes = {
    path: '/transmission',
    name: 'Transmiss??o',
    icon: FeatherIcon.Send,
    component: Transmission,
    route: Route,
};

const chatAppRoutes = {
    path: '/apps/live-chat',
    name: 'Chat ao Vivo',
    icon: FeatherIcon.MessageCircle,
    component: ChatPage,
    route: Route,
};

const taskAppRoutes = {
    path: '/apps/automation',
    name: 'Automa????o',
    icon: FeatherIcon.Terminal,
    children: [
        {
            path: '/apps/tasks/list',
            name: 'Palavras Chaves',
            component: TaskList,
            route: Route,

        },
        {
            path: '/apps/tasks/board',
            name: 'Sequ??ncias',
            component: TaskBoard,
            route: Route,

        },
    ],
};

const fluxAppRoutes = {
    path: '/apps/chatflux',
    name: 'Fluxo de Conversas',
    icon: FeatherIcon.MessageSquare,
    component: ChatFlux,
    route: Route,
};

const settingsAppRoutes = {
    path: '/apps/settings',
    name: 'Configura????es',
    icon: FeatherIcon.Settings,
    component: Settings,
    route: Route,
};

const flowAppRoutes = {
    path: '/apps/constructor/:flowId',
    name: 'Flow',
    icon: FeatherIcon.Settings,
    component: Flow,
    route: Route,
}

const profileAppRoutes = {
    path: '/apps/profile',
    name: 'Perfil',
    icon: FeatherIcon.User,
    component: CalendarApp,
    route: Route,
};

const appRoutes = [
    calendarAppRoutes,
    emailAppRoutes,
    chatAppRoutes,
    campaignAppRoutes,
    taskAppRoutes,
    fluxAppRoutes,
    settingsAppRoutes,
    flowAppRoutes,
    profileAppRoutes,
];

// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach((item) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [rootRoute, dashboardRoutes, audienceRoutes, ...appRoutes];

const authProtectedRoutes = [dashboardRoutes, audienceRoutes, ...appRoutes];
const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes, authProtectedRoutes, allFlattenRoutes, authRoutes };
