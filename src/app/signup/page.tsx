"use client"

import RedirectBtn from "@/components/RedirectBtn"

const SignUp = () => {
  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow">
      <h1 className="text-xl font-semibold mb-4">Create an account</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          minLength={8}
          className="w-full p-2 border rounded"
        />
        <RedirectBtn
          content="Sign Up"
          page="/"
          classAtr="w-full bg-black text-white py-2 rounded hover:opacity-80"
        />
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </form>
    </div>
  )
}

export default SignUp
