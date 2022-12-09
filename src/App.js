import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  window.onscroll = () => {
    const header = document.getElementById("navbar");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
  return (
    <div className="mx-auto bg-gradient-to-br from-[#161334]/80 via-[#B286AB] to-[#7493D3] bg-cover">
      <Navbar />
      <div className="flex flex-wrap gap-4 justify-evenly w-5/6 mx-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
export default App;
