import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AddAffirmation() {
  // const [newAffirmation, setNewAffirmation] = useState("");
  // const [affirmations, setAffirmations] = useState([]);

  // useEffect(() => {
  //   const savedAffirmations = localStorage.getItem("affirmations");
  //   if (savedAffirmations) {
  //     setAffirmations(JSON.parse(savedAffirmations));
  //   }
  // }, []);

  //  const handleAddAffirmation = (e) => {
  //   e.preventDefault();
  //   if (newAffirmation.trim()) {
  //     const updatedAffirmations = [...affirmations, newAffirmation];
  //     setAffirmations(updatedAffirmations);
  //     localStorage.setItem("affirmations", JSON.stringify(updatedAffirmations));
  //     setNewAffirmation(""); // Clear the input field after adding
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Coming Soon...</h1>
      {/* <form onSubmit={handleAddAffirmation} className="flex flex-col items-center">
        <input
          type="text"
          value={newAffirmation}
          onChange={(e) => setNewAffirmation(e.target.value)}
          placeholder="Enter your affirmation"
          className="mb-4 p-2 rounded text-black"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
        >
          Add Affirmation
        </button>
      </form> */}
      <Link href="/" className="mt-6 text-white underline">Go back to home
      </Link>
    </div>
  );
}
