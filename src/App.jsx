import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import UserContext from './utils/UserContext';
import { useState } from 'react';
import store from './utils/store';


function App() {

	const [user, setUser] = useState({
		name: "Abhishek Patel",
		email: "abhishek@gmail.com"
	});

	return (
		<>
			<Provider store={store}>
				<UserContext.Provider
					value={{
						user: user,
						setUser: setUser
					}}
				>
					<Header />
					<Outlet />
					<Footer />
				</UserContext.Provider>
			</Provider>
		</>
	);
}

export default App;