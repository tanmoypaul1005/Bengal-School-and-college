
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Home/Navbar/Navbars';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import Footer from './components/Footer/Footer';
import Singup from './components/Auth/Singup/Singup';
import Singin from './components/Auth/Singin/Singin';
import Teachers from './components/Teachers/Teachers';
import Department from './components/Department/Department';
import TeacherProfile from './components/TeacherProfile/TeacherProfile';
import StudentCountUp from './components/StudentCountUp/StudentCountUp';
import Loginpage from './StudentPortal/StudentAuth/Loginpage';
import PortalHomePage from './StudentPortal/PortalHomePage/PortalHomePage';
import PrivateRoute from './StudentPortal/PrivateRoute/PrivateRoute';
import ClassLectureAll from './components/ClassLecture/ClassLectureAll';
import ClassLecture from './components/ClassLecture/ClassLecture';
import Result from './components/Result/Result';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbars></Navbars>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/login" element={<Singin />} />
          <Route path="/teacher" element={<Department />} />
          <Route path="/teacher/:department" element={<Teachers></Teachers>} />
          <Route path="/teacher/:department/:id" element={<TeacherProfile />} />
          <Route path="/student/login" element={<Loginpage />} />

          <Route path="/student/portal" element={<PrivateRoute><PortalHomePage /></PrivateRoute>} />
          <Route path="/student/classlecture" element={<PrivateRoute><ClassLectureAll /></PrivateRoute>} />
          <Route path="/student/classlecture/:id" element={<PrivateRoute><ClassLecture /></PrivateRoute>} />
          <Route path="/student/result" element={<PrivateRoute><Result /></PrivateRoute>} />
        </Routes>
      </BrowserRouter >
      <StudentCountUp />
      <Footer></Footer>
    </div>
  );
}

export default App;
