import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import "../viewcourse/DocumentationPage.css";
import AppContext from "./AppContext";
// import Navbar from "../globalComponent/Navbar";

const DocumentationPage = ({ pageContent, pageDetails }) => {
  const { docName } = useParams();
  const myContext = useContext(AppContext);
  const placeholderMarkdown = `${pageContent} ${pageDetails.codeBlock}`;

  return (
    <>
      {/* <Navbar /> */}
      <div className="documentation-page">
        <div className="markdown-container">
          <div onClick={()=>myContext.setIsClickedonMenuBar(true)} className="markdown-content" >
            <Markdown>{placeholderMarkdown}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentationPage;
