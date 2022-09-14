import React from "react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ContactAnswerQuestionData } from "../../Datas";
import "./FrequentlyAskedQuestionsContact.css";

export default function FrequentlyAskedQuestionsContact() {
  const [dataQuestion, setDataQuestion] = useState(1);

  const ShowingQuestion = (DataId) => {
    setDataQuestion(DataId);
  };

  return (
    <>
      <div className="Container-FrequentlyAskedQuestionsContact">
        <div className="Wrapper-FrequentlyAskedQuestionsContact">
          <span className="Title-FrequentlyAskedQuestionsContact">
            اطلاعات وسوالات
          </span>
          <h2>سوالات متداول</h2>
          <div className="FrequentlyAskedQuestionsContact">
            {ContactAnswerQuestionData.length &&
              ContactAnswerQuestionData.map((data) => (
                <div className="Answer-Question" key={data.id}>
                  {data.id === dataQuestion ? (
                    <div
                      className="QuestionAnsver-FrequentlyAskedQuestionsContact"
                      onClick={() => setDataQuestion(false)}
                    >
                      <p>{data.answer}</p>
                      <div className="Icon-FrequentlyAskedQuestionsContact">
                        <IoIosArrowUp />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="Question-FrequentlyAskedQuestionsContact"
                      onClick={() => ShowingQuestion(data.id)}
                    >
                      <p>{data.answer}</p>
                      <div className="Icon-FrequentlyAskedQuestionsContact">
                        <IoIosArrowDown />
                      </div>
                    </div>
                  )}

                  {/**insert className ShowAnswer to shoing Answer*/}
                  <div
                    className={`Answer-FrequentlyAskedQuestionsContact ${
                      data.id === dataQuestion ? "ShowAnswer" : ""
                    }`}
                  >
                    <p>{data.question}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
