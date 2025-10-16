import { FaExclamationTriangle, FaTrash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { deleteNewsLetterEamil } from "../../lib/categoryActions";

export default function NewsLetterAdmin() {
  const {  newsLetterEmail = []  } = useAuth();
  const handleDelete = (id) => {
    toast((t) => (
      <div className="flex flex-col items-center gap-4 p-4 bg-white shadow-lg rounded-md">
        <div className="flex items-center gap-3">
          <FaExclamationTriangle className="text-yellow-500 h-8 w-8 flex-shrink-0" />
          <div className="text-left">
            <p className="font-semibold text-gray-800">Delete</p>
            <p className="text-sm text-gray-600">
              This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end gap-3">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-4 py-1.5 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              try {
                await deleteNewsLetterEamil(id);
                toast.success("newsletter Email deleted successfully.", {
                  duration: 2000,
                });
              } catch (error) {
                console.error(error);
                toast.error(error.message || "Delete failed");
              } finally {
                toast.dismiss(t.id);
              }
            }}
            className="px-4 py-1.5 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  return (
    <main className="max-w-6xl my-7">
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          All NewsLetter Email ({newsLetterEmail?.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsLetterEmail.map((email, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between items-center bg-white shadow-md border border-gray-100 rounded-lg px-4 py-3 hover:shadow-lg transition"
            >
              <span className="text-gray-800 font-semibold uppercase text-sm">
                {email.email}
              </span>
              <button
                onClick={() => handleDelete(email?._id)}
                className="p-2 text-gray-500 rounded-full hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200"
              >
                <FaTrash className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
