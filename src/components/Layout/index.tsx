function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <main className="flex flex-col items-center justify-center flex-1 w-full">
                {children}
            </main>
        </div>
    );
}

export default Layout;
