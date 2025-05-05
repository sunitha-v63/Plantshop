import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndoorPlants from './Pages/IndoorPlants';
import Plants from './Pages/Plants';
import Cart from './Pages/Cart';
import Home from './Pages/Home'
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Register from './Pages/Register';
import About from './Pages/About'
import TerraceBalcony from './Pages/TerraceBalcony';
import ImageDescripition from './Pages/ImageDescripition';
import DeskPlant from './Pages/DeskPlant';
import Deskdescripition from './Pages/Deskdescripition';
import ModernPots from './Pages/ModernPots';
import Moderndescripition from './Pages/Moderndescripition';
import GardenEquipments from './Pages/GardenEquipments';
import Gardendescripition from './Pages/gardendescripition';
import Herbal from './Pages/Herbal';
import Index from './Pages/Index';
import Herbaldescripition from './Pages/Herbaldescripition';
import Bonsai from './Pages/Bonsai';
import Bonsaidescripition from './Pages/Bonsaidescripition';
import Cactus from './Pages/Cactus';
import Cautusdescripition from './Pages/Cautusdescripition';
import BlogContent from './Pages/BlogContent';
import Privacy from './Pages/Privacy';
import MainHeader from './Components/MainHeader';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index />} />
      <Route element={<MainHeader />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogcontent" element={<BlogContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/indoor-plant" element={<IndoorPlants />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/terrace" element={<TerraceBalcony />} />
        <Route path="/deskplant" element={<DeskPlant />} />
        <Route path="/modernpots" element={<ModernPots />} />
        <Route path="/garden" element={<GardenEquipments />} />
        <Route path="/herbal" element={<Herbal />} />
        <Route path="/bonsai" element={<Bonsai />} />
        <Route path="/cactus" element={<Cactus />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/imgdescripition" element={<ImageDescripition />} />
        <Route path="/deskdescripition" element={<Deskdescripition />} />
        <Route path="/moderndescripition" element={<Moderndescripition />} />
        <Route path="/gardendescripition" element={<Gardendescripition />} />
        <Route path="/herbaldescripition" element={<Herbaldescripition />} />
        <Route path="/bonsaidescripition" element={<Bonsaidescripition />} />
        <Route path="/cautusdescripition" element={<Cautusdescripition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App





