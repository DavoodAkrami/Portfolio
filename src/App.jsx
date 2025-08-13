import Home from './Pages/Home/Home';


function App() {

  if (window.location.hostname === "https://portfolio-one-azure-17.vercel.app/") {
    window.location.href = "https://davoodakrami.ir";
  }
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
