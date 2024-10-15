import React, { useState } from 'react';

function UploadDocuments() {
    const [resume, setResume] = useState(null);
    const [idCard, setIdCard] = useState(null);
    const [education, setEducation] = useState(null);
    const [panCard, setPanCard] = useState(null);
    const [passBook, setPassBook] = useState(null);

    const handleFileChange = (e, setFile) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-sky-600">Upload Documents</h2>
            <div className="space-y-4 mt-4">
                
                <div>
                    <div className="flex items-center justify-between border border-gray-400 rounded-[50px] p-2">
                        <span className="text-gray-400 ml-2">Upload Resume</span>
                        <input
                            type="file"
                            className="hidden p-2"
                            id="upload-resume"
                            onChange={(e) => handleFileChange(e, setResume)}
                        />
                        <label
                            htmlFor="upload-resume"
                            className="bg-primary mr-2 text-primary-foreground rounded-[20px] px-3 py-1 cursor-pointer border-gray-400 bg-gray-200"
                        >
                            Choose file
                        </label>
                    </div>
                    {resume && <p className="text-sm text-green-500 mt-1 ml-4">File uploaded: {resume.name}</p>}
                    <p className="text-xs text-gray-600 mt-1 ml-4">*size 50kb-800kb</p>
                </div>

                
                <div>
                    <div className="flex items-center justify-between border border-gray-400 rounded-[50px] p-2">
                        <span className="text-gray-400 ml-2">Upload ID Card</span>
                        <input
                            type="file"
                            className="hidden"
                            id="upload-id-card"
                            onChange={(e) => handleFileChange(e, setIdCard)}
                        />
                        <label
                            htmlFor="upload-id-card"
                            className="bg-primary  mr-2 text-primary-foreground rounded-[20px] px-3 py-1 cursor-pointer border-gray-400 bg-gray-200"
                        >
                            Choose file
                        </label>
                    </div>
                    {idCard && <p className="text-sm text-green-500 mt-1 ml-4">File uploaded: {idCard.name}</p>}
                    <p className="text-xs text-gray-600 mt-1 ml-4">*size 50kb-800kb</p>
                </div>

            
                <div>
                    <div className="flex items-center justify-between border border-gray-400 rounded-[50px] p-2">
                        <span className="text-gray-400 ml-2">Upload Education </span>
                        <input
                            type="file"
                            className="hidden"
                            id="upload-education"
                            onChange={(e) => handleFileChange(e, setEducation)}
                        />
                        <label
                            htmlFor="upload-education"
                            className="bg-primary  mr-2 text-primary-foreground rounded-[20px] px-3 py-1 cursor-pointer border-gray-400 bg-gray-200"
                        >
                            Choose file
                        </label>
                    </div>
                    {education && <p className="text-sm text-green-500 mt-1 ml-4">File uploaded: {education.name}</p>}
                    <p className="text-xs text-gray-600 mt-1 ml-4"></p>
                </div>

                
                <div>
                    <div className="flex items-center justify-between border border-gray-400 rounded-[50px] p-2">
                        <span className="text-gray-400 ml-2">Upload Pan Card</span>
                        <input
                            type="file"
                            className="hidden"
                            id="upload-pan-card"
                            onChange={(e) => handleFileChange(e, setPanCard)}
                        />
                        <label
                            htmlFor="upload-pan-card"
                            className="bg-primary  mr-2 text-primary-foreground rounded-[20px] px-3 py-1 cursor-pointer border-gray-400 bg-gray-200"
                        >
                            Choose file
                        </label>
                    </div>
                    {panCard && <p className="text-sm text-green-500 mt-1 ml-4">File uploaded: {panCard.name}</p>}
                    <p className="text-xs text-gray-600 mt-1 ml-4">*size 50kb-800kb</p>
                </div>

                
                <div>
                    <div className="flex  items-center justify-between border border-gray-400 rounded-[50px] p-2">
                        <span className="text-gray-400 ml-2">Upload Pass book</span>
                        <input
                            type="file"
                            className="hidden"
                            id="upload-pass-book"
                            onChange={(e) => handleFileChange(e, setPassBook)}
                        />
                        <label
                            htmlFor="upload-pass-book"
                            className="bg-primary  mr-2 text-primary-foreground rounded-[22px] px-3 py-1 cursor-pointer border-gray-400 bg-gray-200"
                        >
                            Choose file
                        </label>
                    </div>
                    {passBook && <p className="text-sm text-green-500 mt-1 ml-4">File uploaded: {passBook.name}</p>}
                    <p className="text-xs text-gray-600 mt-1 ml-4">*size 50kb-800kb</p>
                </div>
            </div>
        </div>
    );
}

export default UploadDocuments;
