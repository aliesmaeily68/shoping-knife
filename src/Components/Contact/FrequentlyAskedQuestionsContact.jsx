import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { ContactAnswerQuestionData } from "../../Datas";
import "./FrequentlyAskedQuestionsContact.css";

export default function FrequentlyAskedQuestionsContact() {
  const [dataQuestion, setDataQuestion] = useState(
    ContactAnswerQuestionData[0].id
  );

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
                    >
                      <p>{data.answer}</p>
                      <div className="Icon-FrequentlyAskedQuestionsContact">
                        <RiQuestionAnswerLine />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="Question-FrequentlyAskedQuestionsContact"
                      onClick={() => ShowingQuestion(data.id)}
                    >
                      <p>{data.answer}</p>
                      <div className="Icon-FrequentlyAskedQuestionsContact">
                        <MdKeyboardArrowDown />
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
