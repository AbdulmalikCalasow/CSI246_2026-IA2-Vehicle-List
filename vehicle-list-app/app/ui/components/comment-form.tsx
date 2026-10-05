"use client";

// app/ui/components/comment-form.tsx

import { FormEvent, useState } from "react";
import { addComment, type Comment } from "@/app/lib/data";

// Client Component for adding and displaying vehicle comments
export default function CommentForm({
  vehicleId,
  initialComments,
}: {
  vehicleId: string;
  initialComments: Comment[];
}) {
  // Store the values typed into the form
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  // Store comments so the page updates after a comment is added
  const [comments, setComments] = useState(initialComments);

  // Store an error message if a field is empty
  const [error, setError] = useState("");

  // Run when the user submits the comment form
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Check that the user entered a name and comment
    if (!author.trim() || !text.trim()) {
      setError("Please enter your name and a comment.");
      return;
    }

    // Create a new comment for this vehicle
    const newComment = await addComment(vehicleId, {
      author: author.trim(),
      text: text.trim(),
    });

    // Add the new comment to the comments shown on the page
    setComments((currentComments) => [...currentComments, newComment]);

    // Clear the form after submitting
    setAuthor("");
    setText("");
    setError("");
  }

  return (
    <section className="mt-8 rounded-lg border p-5">
      <h2 className="text-2xl font-bold">Comments</h2>

      {/* Display all comments for this vehicle */}
      <div className="mt-4 space-y-4">
        {comments.map((comment) => (
          <article key={comment.id} className="rounded border p-3">
            <p className="font-semibold">{comment.author}</p>
            <p className="mt-1">{comment.text}</p>
            <p className="mt-2 text-sm text-gray-500">
              {new Date(comment.date).toLocaleDateString()}
            </p>
          </article>
        ))}
      </div>

      {/* Form for adding a new comment */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="author" className="block font-semibold">
            Your name
          </label>

          <input
            id="author"
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="comment" className="block font-semibold">
            Comment
          </label>

          <textarea
            id="comment"
            value={text}
            onChange={(event) => setText(event.target.value)}
            className="mt-1 w-full rounded border p-2"
            rows={4}
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add comment
        </button>
      </form>
    </section>
  );
}