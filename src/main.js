import './style.css';

document.querySelector('#app').innerHTML = `
  <div style="
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background:#f3f5ff;
    font-family:Arial,sans-serif;
    text-align:center;
  ">
    <h1>IG Earn</h1>
    <p>Vercel is working ✅</p>
  </div>
`;

console.log('IG Earn loaded successfully');