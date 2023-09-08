import { useEffect } from "react";
import animations from "./animations";
import { useRef } from "react";

function App() {
  const didAnimate = useRef(false);
  useEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;
    animations();
  }, []);

  return (
    <>
      gsap.set
      <section>
        <span className="box1">This will move to the right</span>
      </section>
      gsap.to
      <section>
        <span className="box2">This will move to the right, but smoothly.</span>
      </section>
      gsap.from
      <div className="text-container">
        <h1>
          This is a beatiful looking title,
          <br />
          keep looking at it.
        </h1>
        <button>Press here?</button>
      </div>
      gsap.fromTo
      <section className="circle-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </section>
      gsap.timeline()
      <section className="box-container">
        <div className="box green"></div>
        <div className="box purple"></div>
        <div className="box orange"></div>
      </section>
    </>
  );
}

export default App;
