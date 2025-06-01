"use client"

import RedirectBtn from "@/components/RedirectBtn"

const Login = () => {
  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded-lg shadow">
      <h1 className="text-xl font-semibold mb-4">Welcome back,</h1>
      <form className="space-y-4">
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
          content="Log In"
          page="/"
          classAtr="w-full bg-black text-white py-2 rounded hover:opacity-80"
        />
        <p>
          Don&apos;t have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  )
}

export default Login
