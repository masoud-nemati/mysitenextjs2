"use client";

import { useState } from "react";
import { Input } from "@/app/_components/ui/input/input";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

import "@/tailwind/component/CommentSection.css";

export default function CommentSection() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isLoggedIn] = useState(true);
  const [sentMessage, setSentMessage] = useState(false); // پیام ارسال شد

  const addComment = async () => {
    if (name.trim() && text.trim()) {
      try {
        await addDoc(collection(db, "comments"), {
          name,
          text,
          timestamp: Date.now(),
        });
        // پاک کردن فرم
        setName("");
        setText("");

        // نمایش پیام ارسال شد
        setSentMessage(true);
        setTimeout(() => setSentMessage(false), 3000); // بعد ۳ ثانیه پیام محو شود
      } catch (err) {
        console.error("Error adding comment:", err);
      }
    }
  };

  return (
    <div className="comment-section">
      <h2>Comments and Suggestions Section</h2>

      {isLoggedIn ? (
        <div>
          <Input
            type="text"
            label="Your name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            shape="full"
            isFullWidth
          />

          <textarea
            placeholder="Write your comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="textarea-field"
          />

          <button onClick={addComment} className="submit-button">
            Send
          </button>

          {/* پیام ارسال شد */}
          {sentMessage && (
            <div className="sent-message">
              ✔ Comment Sent!
            </div>
          )}
        </div>
      ) : (
        <p>You must be logged in to submit a comment.</p>
      )}
    </div>
  );
}