import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(2, 3);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hi</h1>
      <p {...fadeInP}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        praesentium natus quisquam hic in dignissimos, molestias temporibus
        deserunt aut voluptas fugit inventore nisi, non doloremque sapiente
        asperiores, suscipit impedit! Placeat debitis tempore assumenda rerum,
        voluptatibus at dolorem quis voluptates ullam dicta repellat repudiandae
        praesentium facilis, recusandae libero ex. In dolore, veniam impedit
        dolores consequatur eum voluptatum ratione vel nisi at non tempore
        aliquam voluptas ipsum dignissimos error commodi amet quas laboriosam?
        Minima, quo? Dolorum maiores asperiores laborum modi obcaecati nemo
        facere minima soluta recusandae, deserunt ad provident quo ut ab minus
        inventore! Aut tempora nihil ducimus, id sequi est voluptates.
      </p>
    </div>
  );
}

export default App;
