
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomStepper from "./components/CustomStepper";
import JobSeeker from "./components/Registrations/Jobseeker";
import Employer from "./components/Registrations/Employer";


import EmployerDashbord from "./Dashboard/EmployerDashboard";
import HomePage from "./components/Home/HomePage";
import InterviewPreparation from "./components/Home/InterviewPreparation";
import SavedJobs from "./components/Home/SavedJobs";
import PopularJobCategories from "./components/Home/PopularJobCategories ";
import TrackApplications from "./components/Home/TrackApplications ";

import PremiumAccessPage from "./components/Home/PremiumAccessPage ";
import JobseekerLogin from "./components/Logins/JobseekerLogin";
import ContactForm from "./components/ContactForm ";
import Navbar from "./components/Navbar";
import PersonalizedJobMatches from "./components/Home/PersonalizedJobMatches";
import SubscriptionPage from "./components/Home/SubscriptionPage";

import Footer from "./components/Footer";

import ComingSoon from "./srujana/ComingSoon ";
import ForgotPassword from "./components/Logins/Forgotpassword";
import ResetPassword from "./components/Logins/ResetPassword";





function App() {
 
  return (
    <div className="App">
   
   <Navbar/>  
     
<Routes>
        
        <Route path="/" element={<HomePage />} />
       
        <Route path="/home" element={<HomePage/>} />
        <Route path="/HomePage" element={<HomePage />}/>
        <Route path="/FindJobs" element={<ComingSoon/>}/>
        <Route path="/Services" element={<ComingSoon/>}/>
        <Route path="/FindJobs" element={<ComingSoon/>}/>
        <Route path="/FindJobs" element={<ComingSoon/>}/>
        <Route path="/Contactus" element={<ContactForm />}/>
        <Route path="/" element={<JobSeeker />} /> 
        <Route path="/jobseeker" element={<CustomStepper/>}/>
       
        <Route path="/Employer" element={<Employer/>}/>
        <Route path="/employer-dashboard" element={<EmployerDashbord/>}/>
    <Route path="/hirepeople" element={<EmployerDashbord/>}/>
    <Route path="/active-jobs" element={<ComingSoon />} /> 
        <Route path="/new-applications" element={<ComingSoon />} /> 
        <Route path="/candidates-review" element={<ComingSoon />} /> 
        <Route path="/shortlisted" element={<ComingSoon />} /> 
        <Route path="/interviews" element={<ComingSoon />} /> 
        <Route path="/findjobs" element={<ComingSoon />} />
        <Route path="/services" element={<ComingSoon />} />
        <Route path="/login" element={<JobseekerLogin/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
     
     
     

        <Route path="/interview-preparation" element={<InterviewPreparation/>}/>
        <Route path="/saved-jobs" element={<SavedJobs/>}/>
        <Route path="/popular-job-categories" element={<PopularJobCategories/>}/>
        <Route path="/track-applications" element ={<TrackApplications/>}/>
        <Route path="/personalized-job-matches" element={<PersonalizedJobMatches/>}/>
        <Route path="/premium-access" element={<PremiumAccessPage/>}/>
            <Route path="/SubscriptionPage" element={<SubscriptionPage/>}/>
            <Route path="/help-support" element={<ComingSoon/>}/>
            <Route path="/saved-categories" element={<ComingSoon/>}/>
           <Route path="/Job-Searching-Tip" element={<ComingSoon/>}/>
      </Routes>
      {/* <PremiumJobsSection/> */}
       {/* <Companycard/>  */}
        
    {/* <PopularJobCategories/>  */}

    <Footer/>
       
    </div>
  );
}

export default App;
