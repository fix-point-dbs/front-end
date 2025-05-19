import { useState, useEffect } from "react";

export function UserForm({ onSubmit, initialData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h2 className="text-xl font-bold">{initialData ? "Edit User" : "Tambah User"}</h2>
      <input
        className="border w-full px-3 py-2 rounded"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border w-full px-3 py-2 rounded"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {initialData ? "Update" : "Tambah"}
      </button>
    </form>
  );
}
