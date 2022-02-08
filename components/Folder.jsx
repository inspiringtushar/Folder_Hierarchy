import { useState } from "react";
function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <>
        <div>
          <span
            style={{
              pointer: "cursor"
            }}
            onClick={() => setExpand(!expand)}
          >
            {explorer.name}
            <br />
          </span>
        </div>
        <div
          style={{
            display: expand ? "block" : "none",
            margin: 10
          }}
        >
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
}
export default Folder;
