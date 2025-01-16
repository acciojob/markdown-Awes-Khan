import React from "react";
import './../styles/App.css';


const App = () => {
	const [value, setValue] = React.useState("");
	const [content, setContent] = React.useState("");

	  React.useEffect(() => {
    const convertedHtml = value
      .replace(/^# (.*$)/gim, '<h1>$1</h1>') 
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>') 
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/\n/gim, '<br/>')
      .replace(/\n\n/gim, '<p></p>');
    	console.log(convertedHtml);
    setContent(convertedHtml);
  }, [value]);


  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>

			<textarea 
				id="input" 
				value={value} 
				placeholder="Type your Markdown here..."
				style={{
			          width: "45%",
			          height: "300px",
			          padding: "10px",
			          fontSize: "16px",
			        }}
				onChange={(e)=>{
					setValue(e.target.value);
				}}
			></textarea>
			<div 
				id="preview"
		        style={{
		          width: "45%",
		          height: "300px",
		          padding: "10px",
		          border: "1px solid #ddd",
		          overflow: "auto",
		          backgroundColor: "#f9f9f9",
		        }}
		        dangerouslySetInnerHTML={{ __html: content }}
        	>
			</div>
    </div>
  )
}

export default App

