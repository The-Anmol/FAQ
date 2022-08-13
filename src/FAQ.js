import React from 'react'
import "./FAQ.css"
import QuestionForm from './QuestionForm'

function FAQ() {
    const questions = [
        {
            question: "is this ok",
            answer: "answer 1"
        },
        {
            question: "What to change",
            answer: "answer 2"
        },
        {
            question: "These questions and answers are rendered by using map function on an array objects",
            answer: ''
        },
        {
            question: "question  4",
            answer: "answer 4"
        },
    ]

    return (
        <>
            <div className='' >Navbar</div>
            <div className="w-10/12 mx-auto mt-8 text-gray-800 ">
                <div className="flex flex-col justify-center w-full">
                    <h3 className="mb-8 text-center">
                        <span className="w-full text-3xl font-bold sm:text-4xl lg:text-5xl leading-titles sm:w-6/12 lg:w-full">
                            FAQ - <span >Frequently asked questions</span>
                        </span>
                    </h3>
                    <div className='flex flex-col gap-8 lg:flex-row' >
                        <div className='w-full p-4 ' >
                            {questions.map((each, index) => (
                                <div key={index} className="relative mb-4 bg-gray-200 rounded-lg">
                                    <input type="checkbox" id={`toggle${index}`} className="hidden toggle" />
                                    <label className="block p-4 font-bold rounded-t-lg cursor-pointer title" htmlFor={`toggle${index}`}>
                                        {each.question} ?
                                    </label>
                                    <div className="overflow-hidden bg-gray-200 rounded-b-lg content">
                                        <p className="p-4 font-semibold text-gray-900">{each.answer}.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <QuestionForm />
                    </div>
                </div>
            </div>
            <div>Footer</div>
        </>
    )
}

export default FAQ