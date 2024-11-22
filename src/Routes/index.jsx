import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import { Main, AboutUs } from "../Pages";
import Layout from "../Layouts";

const Index = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spin size="large" />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="about" element={<AboutUs />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Index;