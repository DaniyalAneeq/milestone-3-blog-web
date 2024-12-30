"use client";

import React, { useRef, useState } from "react";
import { nanoid } from 'nanoid';
import { Trash2 } from "lucide-react";
import {Bounce, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


interface IComments {
    title:string;
    id:string;
}


const Comments = () => {

    const [ comments, setComments ] = useState<IComments[]>([]);
    const inputReference = useRef<HTMLTextAreaElement>(null)
    const [IsFocused, setIsFocused] = useState<boolean>(false);

    const handleInput = () => {
        const inputValue = inputReference.current?.value.trim();
        if(!inputValue){
            toast.warn('Please enter a comment', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            return;
        }
        setComments([{ title: inputValue, id: nanoid() }, ...comments]);
        if(inputReference.current){
            inputReference.current.value = '';
        }
    }
    const onKeyDown = (event: React.KeyboardEvent)=> {
        if (event.key === "Enter") {
            handleInput();
        }
    }

    const deleteComment = (id:string) => {
        const index = comments.findIndex((elem)=> elem.id === id);
        if (index !== -1) {
            const newComment = [...comments];
            newComment.splice(index, 1);
            setComments(newComment)
        }
    }
  return (
    <div>
        <div className="mt-10 flex gap-4 mx-2 font-roboto">
        <textarea 
        onKeyDown={onKeyDown}
        ref={inputReference}
        className="border-black border-b-2 w-80 flex items-center"
        placeholder="Add a comment..."
        onFocus={()=>{
            setIsFocused(true)
        }}
        onBlur={()=>{
            setIsFocused(true)
        }}
         />
         {IsFocused && (
            <button
            onClick={handleInput}
            className="px-4 py-2 bg-blue-300 rounded-xl" 
            >
                Comment
            </button>
            ) }
        </div>
    <div>
        <ul>
            {comments.map((elem) => (
                <div key={elem.id} 
                className="bg-gray-300 rounded-lg  max-w-80 mt-5 flex justify-between px-4 min-h-12 items-center text-black"
                >
                    <li className="">
                        {elem.title}
                    </li>
                    <div className="max-w-xl">
                        <button className="flex gap-1 items-center hover:scale-105" onClick={()=> deleteComment(elem.id)}>
                            <h1 className=" underline">Delete</h1>
                        <Trash2 width={20} />
                        </button>
                    </div>
                </div>
            ))}
        </ul>
    </div>
    <ToastContainer />
    </div>

  )
}

export default Comments