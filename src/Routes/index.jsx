import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import { Main } from "../Pages";
import Layout from "../Layouts";

const Index = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spin size="large" />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Index;