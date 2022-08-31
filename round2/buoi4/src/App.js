import Header from './component/header/Header'
const App = () => {


  const name = "Sáng"

  return (
    <div className="App" style={{
      width: "100%",
      height: "100vh",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <Header />
    </div>
  );
}
export default App;
