import React from 'react'

function QuestionForm() {
    const form = (htmlfor, label, type) => (
        <div className='flex flex-col w-full gap-1' >
            <label htmlFor={htmlfor} >{label}</label>
            <input name={htmlfor} className='p-2 bg-gray-200 rounded-md focus:outline-blue-400 ' type={type} placeholder={`${label} ...`} />
        </div>
    )
    return (
        <>
            <div className='flex flex-col w-full gap-4 p-4 border-2 border-gray-200 rounded-lg' >
                <div className='flex flex-col w-full gap-4' >
                    <div className='flex flex-col gap-4 sm:flex-row lg:flex-col' >
                        {form("name", "Full name", "text")}
                        {form("email", "Email", "email")}
                    </div>
                    <div className='flex flex-col w-full gap-1' >
                        <label htmlFor={`message`} >{`Message`}</label>
                        <textarea name={`message`} className='p-2 bg-gray-200 rounded-md focus:outline-blue-400' type={`text`} placeholder="Message..."
                            rows="6" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionForm