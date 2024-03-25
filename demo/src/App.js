
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
// import HomeSeeker from './pages/Home/HomeSeeker';
// import HomeProvider from './pages/Home/HomeProvider';
import Signup from '../src/components/Code/Signup';
import Login from '../src/components/Code/Login';
import ProviderSignup from '../src/components/Code/ProviderSignup';
import ProviderLogin from '../src/components/Code/ProviderLogin';
import HeaderSeeker from './components/Layouts/HeaderSeeker';
import HeaderProvider from './components/Layouts/HeaderProvider';
import ApplyJob from '../src/components/Code/ApplyJob';
import ProfileRegistration from '../src/components/Code/ProfileRegistration';
import ViewJob from '../src/components/Code/ViewJob';
import ViewApplications from '../src/components/Code/ViewApplications';
import PostJob from '../src/components/Code/PostJob';
import UpdateJob from '../src/components/Code/UpdateJob';
import DeleteJob from '../src/components/Code/DeleteJob';
import PdfUpload from '../src/components/Code/FileUpload';
import PdfDownload from '../src/components/Code/FileDownload';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/SDashboard" element={<HeaderSeeker/>} />
      <Route path="/PDashboard" element={<HeaderProvider/>} />
      <Route path="/seekersignup" element={<Signup/>} />
      <Route path="/seekerlogin" element={<Login/>} />
      <Route path="/providersignup" element={<ProviderSignup/>} />
      <Route path="/providerlogin" element={<ProviderLogin/>} />
      <Route path="/profile" element={<ProfileRegistration/>} />
      <Route path="/applyjob" element={<ApplyJob/>} />
      <Route path="/viewjob" element={<ViewJob/>} />
      <Route path="/postjob" element={<PostJob/>} />
      <Route path="/deletejob/:id" element={<UpdateJob/>} />
      <Route path="/updatejob/:id" element={<DeleteJob/>} />
      <Route path="/pdfupload" element={<PdfUpload/>} />
      <Route path="/pdfdownload" element={<PdfDownload/>} />
      <Route path="/viewapplication" element={<ViewApplications/>} />
    </Routes>
  </Router>
  );
}

export default App;
