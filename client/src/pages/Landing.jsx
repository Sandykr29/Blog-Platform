import { useNavigate } from "react-router-dom";
import LandingSection from "./LandingSection";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-200 via-pink-200 to-yellow-200 text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to BLOGO</h1>
      <p className="text-xl mb-8 text-center">
        A platform to connect, share, and create amazing blogs. Join us now to start your journey!
      </p>

      {/* Section with Background Image */}
      <div
        className="relative w-full max-w-screen-lg mx-auto px-5 py-20 space-y-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512757776214-26d36777b513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D')`,
        }}
      >
        <div className="bg-black bg-opacity-40 p-10 rounded-lg">
          <h2 className="text-3xl font-semibold text-white mb-5 text-center">
            Everyone has a story. It's time you shared yours.
          </h2>
          <p className="text-lg text-white text-center mb-6">
            Share your thoughts, ideas, and experiences with the world.
          </p>
          <div className="flex gap-5 justify-center">
            <button
              onClick={handleLogin}
              className="bg-indigo-500 text-white p-3 rounded-lg shadow-lg hover:bg-indigo-600 transition"
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="bg-indigo-500 text-white p-3 rounded-lg shadow-lg hover:bg-indigo-600 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Landing Sections */}
      <div className="w-full max-w-screen-lg mx-auto px-5 py-20 space-y-20">
        {/* First Landing Section */}
        <LandingSection
          image="https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg"
          text="Everyone has a story. It's time you shared yours."
          flip={false}
        />

        {/* Second Landing Section */}
        <LandingSection
          image="https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww"
          text="Write not because you have to, but because you *can't not*."
          flip={true}
        />

        {/* Third Landing Section with a map, camera, pencil, books, and bag */}
        <LandingSection
          image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Discover the world through creativity and exploration."
          flip={false}
        />

        {/* Fourth Landing Section with Eiffel Tower */}
        <LandingSection
          image="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Experience the beauty of landmarks around the world."
          flip={true}
        />

        {/* Fifth Landing Section with a girl in a pool */}
        <LandingSection
          image="https://images.unsplash.com/photo-1532347922424-c652d9b7208e?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Relax and unwind, feel the calmness in every moment."
          flip={false}
        />

        {/* Sixth Landing Section with an airplane over snow */}
        <LandingSection
          image="https://plus.unsplash.com/premium_photo-1679830513922-d11c0fedfa99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU5fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D"
          text="Soar high above the clouds, where adventures await."
          flip={true}
        />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-5 right-5 bg-indigo-500 text-white p-4 rounded-full shadow-lg hover:bg-indigo-600 transition"
        title="Back to Top"
      >
        ↑
      </button>
    </div>
  );
};

export default LandingPage;
