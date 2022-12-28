import { Component1 } from "../src/components/component1"
import { useAppDispatch } from "../src/hooks/use-hook-redux/use-hook-redux"
import { authActions } from "../src/redux/auth-slice"
export default function Home() {
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(authActions.setUser({
      id: 1,
      name: "sang"
    }))
  }
  const onClickDelete = () => {
    dispatch(authActions.deleteUser())
  }


  return (
    <>
      <button onClick={onClick} className="bg-white text-black p-3 rounded-md my-3 mx-3">Đặt người dùng </button>
      <button onClick={onClickDelete} className="bg-white text-black p-3 rounded-md my-3 mx-3">Xóa người dùng </button>
      <div className="w-[100px] h-[100px] bg-red-500"></div>
      Sang
      <Component1></Component1>
    </>
  )
}
