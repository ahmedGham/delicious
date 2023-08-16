// import "./App.css";
import "./index";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Subscribe from "./pages/Subscribe";
import AddRecipe from "./pages/AddRecipe";
import './i18n'
import { Route, Routes } from "react-router-dom";
import Layout from "./compnents/Layout/Layout";
import HrefProvider from "./compnents/customHooks/useHrefListener";

function App() {
  return (
    <HrefProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/AddRecipe" element={<AddRecipe />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </Layout>
    </HrefProvider>
  );
}

export default App;
// <div>
//   <div>
//     <header className="App">
//       <div className="container">
//         <nav>
//           <a href="#">Home</a>
//           <a href="#">Recipes</a>
//           <a href="#">About</a>
//           <a href="#">Contact</a>
//           <a href="#">Profile</a>
//         </nav>
//         <div className="layout-svg">
//           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//             <path
//               fill="#FF922B"
//               d="M41.3,-55.9C56,-46.1,72.2,-37.4,79.1,-23.9C86,-10.4,83.6,8,75.9,22.5C68.2,37,55.3,47.7,41.8,55.2C28.3,62.6,14.1,66.9,1.3,65.1C-11.6,63.4,-23.2,55.7,-36,48C-48.8,40.3,-62.8,32.6,-72.6,19.6C-82.4,6.5,-88,-12,-83.6,-27.7C-79.2,-43.4,-64.7,-56.3,-49.2,-65.9C-33.6,-75.4,-16.8,-81.6,-1.8,-79.2C13.3,-76.8,26.5,-65.8,41.3,-55.9Z"
//               transform="translate(100 100)"
//             />
//           </svg>
//         </div>
//         <div className="wel">
//           <div className="wel-text">
//             <h1>Delicios</h1>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//               Culpa, iste? Lorem ipsum dolor, sit amet consectetur
//               adipisicing elit. Magni, vitae.
//             </p>
//             <button className="btn">Show All</button>
//           </div>
//           <div className="wel-img">
//             <img src={image} alt="" />
//           </div>
//         </div>
//       </div>
//     </header>
//   </div>
// </div>
