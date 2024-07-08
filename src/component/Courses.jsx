import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./viewcourse/Sidebar";
import DocumentationPage from "./viewcourse/DocumentationPage";
import htmlPages from "./doc/html";
import cssPages from "./doc/css";
import reactPages from "./doc/react";
import Header from "./viewcourse/Header";
import AppContext from "./viewcourse/AppContext";

const Courses = () => {
  const [isClickedOnHtmlCourse, setIsClickedOnHtmlCourse] = useState(true);
  const [isClickedOnCssCourse, setIsClickedOnCssCourse] = useState(false);
  const [isClickedOnReactCourse, setIsClickedOnReactCourse] = useState(false);
  const [isClickedonMenuBar, setIsClickedonMenuBar] = useState(false);
  const contextObject = {
    isClickedOnHtml: isClickedOnHtmlCourse,
    isClickedOnCss: isClickedOnCssCourse,
    isClickedOnReact: isClickedOnReactCourse,
    isClickedOnMenu: isClickedonMenuBar,
    setIsClickedonMenuBar,
    setIsClickedOnHtmlCourse,
    setIsClickedOnCssCourse,
    setIsClickedOnReactCourse,
  };
  return (
    <div>
      <AppContext.Provider value={contextObject}>
        <Router>
          <div className="header">
            <Header />
          </div>
          <div className="app-container">
            {contextObject.isClickedOnHtml ? (
              <Sidebar pages={htmlPages} />
            ) : (
              <span></span>
            )}
            {contextObject.isClickedOnCss ? (
              <Sidebar pages={cssPages} />
            ) : (
              <span></span>
            )}
            {contextObject.isClickedOnReact ? (
              <Sidebar pages={reactPages} />
            ) : (
              <span></span>
            )}
            <div className="main-content">
              <Routes>
                <Route
                  path="/"
                  element={
                    <DocumentationPage
                      pageTitle={htmlPages[0].title}
                      pageContent={htmlPages[0].content}
                      pageDetails={htmlPages[0]}
                    />
                  }
                ></Route>
                <Route
                  path="/getting-started"
                  element={
                    <DocumentationPage
                      pageTitle={reactPages[0].title}
                      pageContent={reactPages[0].content}
                      pageDetails={reactPages[0]}
                    />
                  }
                ></Route>
                <Route
                  path="/css-introduction"
                  element={
                    <DocumentationPage
                      pageTitle={cssPages[0].title}
                      pageContent={cssPages[0].content}
                      pageDetails={cssPages[0]}
                    />
                  }
                ></Route>

                {contextObject.isClickedOnHtml
                  ? htmlPages.map((page) => (
                      <Route
                        key={page.id}
                        path={page.path}
                        element={
                          <DocumentationPage
                            pageTitle={page.title}
                            pageContent={page.content}
                            pageDetails={page}
                          />
                        }
                      />
                    ))
                  : ""}

                {contextObject.isClickedOnCss
                  ? cssPages.map((page) => (
                      <Route
                        key={page.id}
                        path={page.path}
                        element={
                          <DocumentationPage
                            pageTitle={page.title}
                            pageContent={page.content}
                            pageDetails={page}
                          />
                        }
                      />
                    ))
                  : ""}

                {contextObject.isClickedOnReact
                  ? reactPages.map((page) => (
                      <Route
                        key={page.id}
                        path={page.path}
                        element={
                          <DocumentationPage
                            pageTitle={page.title}
                            pageContent={page.content}
                            pageDetails={page}
                          />
                        }
                      />
                    ))
                  : ""}
              </Routes>
            </div>
          </div>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default Courses;
