import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import Layout from "../Layouts";

const Main = lazy(() => import("../Pages/Main"));
const WhoWeAre = lazy(() => import("../Pages/WhoWeAre"));
const OurStory = lazy(() => import("../Pages/OurStory"));
const OurMission = lazy(() => import("../Pages/OurMission"));
const SecretaryGeneral = lazy(() => import("../Pages/SecretaryGeneral"));
const DcAward = lazy(() => import("../Pages/DcAward"));
const HighLevelMeetings = lazy(() => import("../Pages/HighLevelMeetings"));
const DiplomatMeetings = lazy(() => import("../Pages/DiplomatMeetings"));
const DebateSessions = lazy(() => import("../Pages/DebateSessions"));
const Workshops = lazy(() => import("../Pages/Workshops"));
const NetworkingEvents = lazy(() => import("../Pages/NetworkingEvents"));
const CulturalExchange = lazy(() => import("../Pages/CulturalExchange"));
const Constitution = lazy(() => import("../Pages/Constitution"));
const InternalInterests = lazy(() => import("../Pages/InternalInterests"));
const InternationalInterests = lazy(() => import("../Pages/InternationalInterests"));
const Structure = lazy(() => import("../Pages/Structure"));
const Stakeholders = lazy(() => import("../Pages/Stakeholders"));
const YoungLeaders = lazy(() => import("../Pages/YoungLeaders"));
const Journals = lazy(() => import("../Pages/Journals"));
const Articles = lazy(() => import("../Pages/Articles"));
const BecomeAuthor = lazy(() => import("../Pages/BecomeAuthor"));
const ShareResearch = lazy(() => import("../Pages/ShareResearch"));

const Index = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin size="large" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            {/* About Us Routes */}
            <Route path="whoweare" element={<WhoWeAre />} />
            <Route path="ourStory" element={<OurStory />} />
            <Route path="ourMission" element={<OurMission />} />
            <Route path="secretarygeneral" element={<SecretaryGeneral />} />
            <Route path="dcaward" element={<DcAward />} />
            {/* Activities Routes */}
            <Route path="highlevelmeetings" element={<HighLevelMeetings />} />
            <Route path="diplomatmeetings" element={<DiplomatMeetings />} />
            <Route path="debatesessions" element={<DebateSessions />} />
            <Route path="workshops" element={<Workshops />} />
            <Route path="networkingevents" element={<NetworkingEvents />} />
            <Route path="culturalexchange" element={<CulturalExchange />} />
            {/* Diplomacy Community Routes */}
            <Route path="constitution" element={<Constitution />} />
            <Route path="internalinterests" element={<InternalInterests />} />
            <Route path="internationalinterests" element={<InternationalInterests />} />
            <Route path="structure" element={<Structure />} />
            <Route path="stakeholders" element={<Stakeholders />} />
            <Route path="youngleaders" element={<YoungLeaders />} />
            {/* Publications Routes */}
            <Route path="journals" element={<Journals />} />
            <Route path="articles" element={<Articles />} />
            <Route path="becomeauthor" element={<BecomeAuthor />} />
            <Route path="shareresearch" element={<ShareResearch />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Index;
