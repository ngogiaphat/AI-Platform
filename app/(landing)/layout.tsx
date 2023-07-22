const LandingLayout = ({
		children,
	}: {
	children: React.ReactNode;
}) => {
	return(
		<main className="h-full overflow-auto bg-[#111827]">
			<div className="h-full w-full mx-auto max-w-screen-xl">
				{children}
			</div>
		</main>
	);
};
export default LandingLayout;