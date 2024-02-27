import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/components/templates/layout';
import NotFound from '@/pages/not-found';
import SigninPage from '@/pages/signin/signin';
import SignupPage from '@/pages/signup/signup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<SigninPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Route>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
