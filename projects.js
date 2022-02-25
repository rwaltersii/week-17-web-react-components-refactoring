// Step 1 - Convert this to a React Component
function Project({ data }) {
  const myStyle = {
    background: "url(" + data.imageUrl + ")",
    backgroundSize: "cover",
  };

  return (
    <div className="project-card">
      <div className="project-header" style={myStyle}>
        <div className="header-icon-container">
          <a href={data.githubLink} target="_blank">
            <i className="material-icons header-icon"></i>
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="project-content-header">
          <h3 className="project-title">{data.title}</h3>
        </div>

        <div className="project-info">
          <div className="git-logo"></div>
          <div className="info-section">
            <label>Description</label>
            <span>{data.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
