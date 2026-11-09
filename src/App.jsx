
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

function App() {
  const [idToken, setIdToken] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div style={{
      padding: 40,
      fontFamily: "Arial",
      maxWidth: 700,
      margin: "auto"
    }}>
      <h2>Knect Google Login Token Tester</h2>

      <p>Google Account နဲ့ Sign In လုပ်ပါ။</p>

      <GoogleLogin
        onSuccess={(response) => {
          setIdToken(response.credential);
          setMessage("Google ID Token received successfully!");
        }}
        onError={() => {
          setMessage("Google Login Failed");
        }}
      />

      {message && <p>{message}</p>}

      {idToken && (
        <>
          <h3>Google ID Token</h3>

          <textarea
            value={idToken}
            readOnly
            rows={8}
            style={{ width: "100%", wordBreak: "break-all" }}
          />

          <button
            onClick={() => {
              navigator.clipboard.writeText(idToken);
              setMessage("ID Token copied!");
            }}
          >
            Copy ID Token
          </button>
        </>
      )}
    </div>
  );
}

export default App;
