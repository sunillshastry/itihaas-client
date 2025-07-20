import logo from '@/assets/logo.png';

function Logo() {
	return (
		<>
			<img
				src={logo}
				alt="Itihaas Logo"
				width="50"
				height="50"
				title="Itihaas"
			/>
			<h1
				className="font-logo text-primary-500 ml-2 text-3xl"
				title="Itihaas"
			>
				Itihaas
			</h1>
		</>
	);
}

export default Logo;
