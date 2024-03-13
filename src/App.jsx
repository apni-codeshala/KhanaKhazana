import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import UserContext from './utils/UserContext';
import { useState } from 'react';


function App() {

	const [user, setUser] = useState({
		name: "Abhishek Patel",
		email: "abhishek@gmail.com"
	});

	return (
		<>
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
		</>
  );
}

export default App;