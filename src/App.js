import "./App.css";
import Routes from "./pages/Routes";
import Header from "./components/Header/Topnav";
import Footer from "./components/Footer/Footer";
import { BagProvider } from "./components/BagProvider";
function App() {
    return (
        <>
            <BagProvider>
                <Header />
                <main className="min-h-screen">
                    <Routes />
                </main>
                <Footer />
            </BagProvider>
        </>
    );
}

export default App;
