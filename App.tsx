import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	useHistory
} from "react-router-dom";
import Login from "./pages/Login";
import Dash from "./pages/DashBoard/Dash";
import { useAuthStore } from "./store/useAuthStore";
import ForgotPassword from "./pages/Login/Password";
import Support from "./pages/Login/Support";
import MiniDrawer from "./components/Header";
import Report from "./pages/Prestador/Report";
import ReportOrder from "./pages/Order/Report";
import UserProfile from "./pages/User";
import OrdersPage from "./pages/MyOrder/Order";
import { setupInterceptors } from "./service/Interceptors";
import Avaliation from "./pages/Avaliation";
import Reports from "./pages/Reports/Report";

const theme = createTheme({
	palette: {
		primary: { main: "#1976d2" },
		secondary: { main: "#dc004e" },
		background: { default: "#fafafa" }
	},
	typography: { fontFamily: "GeneralSans, sans-serif" }
});

// PrivateRoute para proteger rotas privadas
const PrivateRoute = ({ component: Component, ...rest }: any) => {
	const isAuthenticated = useAuthStore(state => state.isAuthenticated);
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<MiniDrawer>
						<Component {...props} />
					</MiniDrawer>
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
};

// PublicRoute para rotas públicas que podem ser restritas após autenticação
const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
	const isAuthenticated = useAuthStore(state => state.isAuthenticated);
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated && restricted ? (
					<Redirect to="/dashboard" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

const App: React.FC = () => {
	const history = useHistory();

	useEffect(() => {
		setupInterceptors(history);
	}, [history]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					{/* Rotas Públicas */}
					<Route exact path="/" render={() => <Redirect to="/login" />} />
					<PublicRoute restricted={true} path="/login" component={Login} />
					<PublicRoute
						restricted={true}
						path="/forgot-password"
						component={ForgotPassword}
					/>
					<PublicRoute restricted={true} path="/support" component={Support} />
					<PublicRoute
						restricted={true}
						path="/avaliation/:id"
						component={Avaliation}
					/>

					{/* Rotas Privadas */}
					<PrivateRoute path="/myaccount" component={UserProfile} />
					<PrivateRoute path="/dashboard" component={Dash} />
					<PrivateRoute path="/reports" component={Reports} />
					<PrivateRoute path="/prestadores" component={Report} />
					<PrivateRoute path="/orders" component={ReportOrder} />
					<PrivateRoute path="/my-orders" component={OrdersPage} />

					{/* Rotas não encontradas redirecionam para login */}
					<Redirect to="/login" />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
