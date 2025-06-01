import RedirectBtn from "@/components/RedirectBtn"

const Account = () => {
  return (
    <div className="relative">
      <RedirectBtn
        content="Home"
        page="/"
        classAtr="bg-black text-white px-2 py-1 rounded hover:opacity-80 absolute top-2 right-2 text-xl"
      />
    </div>
  )
}

export default Account
