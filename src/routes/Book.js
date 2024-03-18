import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";
import "./App.css";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>{props.number}</p>
    </div>
  );
});

function MyAlbum(props) {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("입력한 것 넣을수도 있음");
  const printText = () => {
    setText(inputText);
    setInputElement("");
  };

  return (
    <body>
      <div className="bookSection">
        <Link to=""></Link>
        <HTMLFlipBook
          width={550}
          height={650}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          showCover={true}
          flippingTime={1000}
          style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
          className="album-web"
        >
          <PageCover>책 표지</PageCover>
          <PageCover>목차가 들어갈 곳</PageCover>

          <Page number="1">
            <hr></hr>
            <p contentEditable="true">
              In my younger and more vulnerable years my father gave me some
              advice that I’ve been turning over in my mind ever since.
            </p>
          </Page>
          <Page number="2">
            <hr></hr>
            <p>{text}</p>
            “Whenever you feel like criticizing any one,” he told me, “just
            remember that all the people in this world haven’t had the
            advantages that you’ve had.”
          </Page>
          <Page number="3">
            <hr></hr>
            He didn’t say any more, but we’ve always been unusually
            communicative in a reserved way, and I understood that he meant a
            great deal more than that. In consequence, I’m inclined to reserve
            all judgments, a habit that has opened up many curious natures to me
            and also made me the victim of not a few veteran bores. The abnormal
            mind is quick to detect and attach itself to this quality when it
            appears in a normal person, and so it came about that in college I
            was unjustly accused of being a politician, because I was privy to
            the secret griefs of wild, unknown men. Most of the confidences were
            unsought — frequently I have feigned sleep, preoccupation, or a
            hostile levity when I realized by some unmistakable sign that an
            intimate revelation was quivering on the horizon; for the intimate
            revelations of young men, or at least the terms in which they
            express them, are usually plagiaristic and marred by obvious
            suppressions. Reserving judgments is a matter of infinite hope. I am
            still a little afraid of missing something if I forget that, as my
            father snobbishly suggested, and I snobbishly repeat, a sense of the
            fundamental decencies is parcelled out unequally at birth.
          </Page>
          <Page number="4">
            <hr></hr>
          </Page>
          <PageCover></PageCover>
          <PageCover>끄읕</PageCover>
        </HTMLFlipBook>
        <br></br>
        <br></br>
        <div className="formContainer"></div>
      </div>
    </body>
  );
}

export default MyAlbum;
