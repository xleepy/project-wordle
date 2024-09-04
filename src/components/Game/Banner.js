import React from "react";

function Banner({ status, count }) {
  const won = status === "happy";
  console.log("status", status, won);
  return (
    <div className={`banner ${!!status && status}`}>
      {won && (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{count} guesses</strong>.
        </p>
      )}
      {!won && (
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
