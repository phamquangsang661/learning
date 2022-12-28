import { Component2 } from "./component2"

type Component1Props = {

}

export const Component1 = ({ }: Component1Props) => {
    return <>
        <br />
        đây là component 1
        <br />
        <Component2 ></Component2>
    </>
}