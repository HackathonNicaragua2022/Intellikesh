import React from "react";
import Editor from "@monaco-editor/react";
const Course = () => {
  return (
    <div>
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onChange={(data) => console.log(data)}
      />
    </div>
  );
};

export default Course;
