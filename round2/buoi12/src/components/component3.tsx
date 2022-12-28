import { useAppSelector } from "../hooks/use-hook-redux/use-hook-redux"

type Component3Props = {

}
export const Component3 = ({ }: Component3Props) => {
    const user = useAppSelector((state) => state.auth.user)
    return <>
        đây là component 3
        <br></br>
        {user?.id} - {user?.name}
    </>
}