const renderHomePage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const home = document.createElement("div");
    home.classList.add("tab-content")
    home.innerHTML = `<div id="top-nav">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Order Online</a></li>
    </ul>
</div>
<div id="heading-section">
    <h1>Trattoria Trussardi<br><span>Italian Restaurant</span></h1>
</div>
<div id="owner-section">
    <div id="owner-container">
        <h3>Our Founder and Owner</h3>
        <div>Meet Tonio Trussardi, the benevolent owner and chef of Trattoria Trussardi. Tonio's dishes are not only delicious but also possess the power to heal, thanks to his unwavering dedication to using only the freshest and healthiest ingredients. Come and experience the warmth and charm of Tonio's hospitality at Trattoria Trussardi.</div>
    </div>              
    <img src="./imgs/Tonio-Trussardi.png" alt="Tonio Trussardi" id="tonio-image">
</div>`;
  
    contentContainer.appendChild(home);
})();

export { renderHomePage };
