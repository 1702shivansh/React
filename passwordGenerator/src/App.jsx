import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [l, setL] = useState(12);
  const [nAllow, setNAllow] = useState(true);
  const [cAllow, setCAllow] = useState(true);
  const [pass, setPass] = useState("");

  const passGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (nAllow) str += "0123456789";
    if (cAllow) str += "!@#$%(){}<>?";
    for (let i = 1; i <= l; i++) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }
    setPass(password);
  }, [nAllow, cAllow, l]);

  useEffect(() => {
    passGenerator();
  }, [l, nAllow, cAllow, passGenerator]);

  const passRef = useRef(null);
  const copyToClip = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [pass]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 text-orange-400 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          🔑 Password Generator
        </h1>

        {/* Input + Copy */}
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={pass}
            className="w-full py-2 px-3 bg-white text-black font-mono text-lg tracking-wide"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyToClip}
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 font-semibold"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <label className="text-white font-medium">Length: {l}</label>
            <input
              type="range"
              min={6}
              max={32}
              value={l}
              className="cursor-pointer w-2/3 accent-orange-400"
              onChange={(e) => setL(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={nAllow}
              id="numberInput"
              onChange={() => setNAllow((prev) => !prev)}
              className="accent-orange-400"
            />
            <label htmlFor="numberInput" className="text-white">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={cAllow}
              id="characterInput"
              onChange={() => setCAllow((prev) => !prev)}
              className="accent-orange-400"
            />
            <label htmlFor="characterInput" className="text-white">
              Include Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
