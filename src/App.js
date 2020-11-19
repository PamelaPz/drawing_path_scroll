import './App.sass';

function App() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -80 750 2850" id="star-svg">
      <path fill="none" stroke="white" strokeWidth="3" id="star-path" d="m 250 0 l 0 300 c 0 0 0 30 -30 30 l -80 0 a 1 1 0 0 0 0 45 l 219 0 a 4 4 0 0 1 0 45 l -80 0 c 0 0 -30 0 -30 30 l 0 800 c 0 0 0 30 30 30 l 80 0 a 1 1 0 0 1 0 45 l -219 0 a 1 1 0 0 0 0 45 l 80 0 c 0 0 30 0 30 30 l 0 400 c 0 0 0 30 -30 30 l -80 0 a 1 1 0 0 0 0 45 l 219 0 a 1 1 0 0 1 0 45 l -80 0 c 0 0 -30 0 -30 30 l 0 600 c 0 0 0 30 -30 31 l -80 0 a 1 1 0 0 0 0 45 l 219 0 a 1 1 0 0 1 0 45 l -80 0 c 0 0 -30 0 -30 30 l 0 300" />
    </svg>
  );
}

window.onload = function() {
  var path = document.querySelector('#star-path');
  var pathLength = path.getTotalLength();
  console.log(pathLength);

  path.style.strokeDasharray = pathLength + ' ' + pathLength;
  path.style.strokeDashoffset = pathLength;
  path.getBoundingClientRect();
  window.addEventListener("scroll", function(e) {

  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var drawLength = pathLength * scrollPercentage;
    
  path.style.strokeDashoffset = pathLength - drawLength;
    
  if (scrollPercentage >= 0.99) {
      path.style.strokeDasharray = "none";
    } else {
      path.style.strokeDasharray = pathLength + ' ' + pathLength;
    }
  });
}

export default App;
