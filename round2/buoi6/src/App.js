
import './App.css';
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

function App() {
  const [step, setStep] = useState(1)
  const [result, setR] = useState((value) => {
    if (value == undefined)
      return "0"
    return parseFloat(value).toString()
  }, "0")
  const [firstNumber, setFN] = useState((value) => {
    if (value == undefined)
      return "0"
    return parseFloat(value).toString()
  });
  const [secondNumber, setSN] = useState((value) => {
    if (value == undefined)
      return "0"
    return parseFloat(value).toString()
  })
  const [memory, setMemory] = useState([])


  const [symbol, setSymbol] = useState('')

  const updateMemory = (fn, sn, sym, res) => {
    const temp = memory
    temp.push({
      firstNumber: fn,
      secondNumber: sn,
      symbol: sym,
      result: res
    })
    setMemory(temp)
  }

  const convertNumber = (value) => {
    const isUseDot = value?.[value.length - 1] === '.' || false
    if (isUseDot) {
      return parseFloat(value).toString() + "."
    } else {
      return parseFloat(value).toString()
    }

  }

  const setResult = (value) => {
    setR(convertNumber(value))
  }
  const setFirstNumber = (value) => {
    setFN(convertNumber(value))
  }

  const setSecondNumber = (value) => {
    setSN(convertNumber(value))
  }

  const calculateWithTwoNumbers = (first, second, convert = (value) => value) => {
    switch (symbol) {
      case "PLUS": {
        let resultTemp = first + second
        resultTemp = convert(resultTemp)
        updateMemory(first, second, symbol, resultTemp)
        setFirstNumber(resultTemp)
        setResult(resultTemp)
        break;
      }
      case "MIN": {
        let resultTemp = first - second
        resultTemp = convert(resultTemp)
        updateMemory(first, second, symbol, resultTemp)
        setFirstNumber(resultTemp)
        setResult(resultTemp)
        break;
      }
      case "MUP": {
        let resultTemp = first * second
        resultTemp = convert(resultTemp)
        updateMemory(first, second, symbol, resultTemp)
        setFirstNumber(resultTemp)
        setResult(resultTemp)
        break;
      }
      case "DIV": {
        let resultTemp = first / second
        resultTemp = convert(resultTemp)
        updateMemory(first, second, symbol, resultTemp)
        setFirstNumber(resultTemp)
        setResult(resultTemp)
        break;
      }
      default: {
      }
    }
  }

  const calculate = () => {
    if (step == 1 || step == 3)
      return;
    setStep(3)
    const first = parseFloat(firstNumber);
    const second = parseFloat(secondNumber);
    calculateWithTwoNumbers(first, second)
    setSecondNumber("0")
  }



  const calculatePercent = () => {
    if (step == 3)
      return;
    if (step == 1) {
      const first = parseFloat(firstNumber) / 100;
      setResult(first)
      setFirstNumber(first)
      return;
    }
    if (step == 2) {
      setStep(3)
      const first = parseFloat(firstNumber);
      const second = parseFloat(secondNumber);
      calculateWithTwoNumbers(first, second, (value) => value / 100)
    }

    setSecondNumber("0")
  }


  const handleClick = (type) => () => {
    console.log(type)
    if (['PLUS', 'MUP', 'DIV', 'MIN'].includes(type)) {
      setStep(2)
      setSymbol(type)
      return;
    }

    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(type)) {
      if (step === 1) {
        setFirstNumber(firstNumber + type)//num is 3
        setResult(firstNumber + type)
      }
      if (step === 2) {
        setSecondNumber(secondNumber + type)
        setResult(secondNumber + type)
      }
      if (step === 3) {
        setFirstNumber(type)
        setResult(type)
      }
      return;
    }
    switch (type) {
      case 'AC': {
        setStep(1)
        setResult(0)
        setFirstNumber(0)
        setSecondNumber(0)
        break;
      }
      case 'PEC': {
        calculatePercent()
        break;
      }
      case 'EUQ': {
        calculate()
        break;
      }
      case 'DOT': {

        if (step == 1) {
          if (firstNumber.includes('.')) { return; }
          setFirstNumber(firstNumber + ".")
          setResult(firstNumber + ".")
        }
        if (step == 2) {
          if (secondNumber.includes('.')) { return; }
          setSecondNumber(secondNumber + ".");
          setResult(secondNumber + ".")
        }
        if (step == 3) {
          setFirstNumber("0.")
          setResult("0.")
          setStep(1)
        }
        break;
      }

      case 'POS': {
        if (step === 1) {

          setFirstNumber((-parseInt(firstNumber)).toString())
          setResult((-parseInt(firstNumber)).toString())
          return;
        }
        if (step === 2) {
          setSecondNumber((-parseInt(secondNumber)).toString())
          setResult((-parseInt(firstNumber)).toString())
        }
        if (step == 3) {
          setFirstNumber((-parseInt(result)).toString())
          setResult((-parseInt(result)).toString())
        }
        break;
      }

      default: {

      }
    }
  }

  const number = ['7', '8', '9', '4', '5', '6', '1', '2', '3']

  const convertSymbol = (sym) => {
    const symMem = {
      "PLUS": "+",
      "MUP": "*",
      "DIV": '/',
      "MIN": '-'
    }
    return symMem[sym]
  }

  const onClickMemory = (mem) => () => {
    setFirstNumber(mem.result)
    setResult(mem.result)
    setStep(1)
  }

  const onClickDeleteMemory = () => {
    setMemory([])
  }
  useEffect(() => {
    console.log("Mouted")
    return () => {
      console.log("UNMOUNT")
    }
  }, [])
  console.log("RENDER")

  const [isFirst, setIsFirst] = useState(true)
  const numRef = useRef(0)
  // useEffect(() => {
  //   // Call when componentWillMount and componentWillUpdate
  //   console.log("USE EFFECT 2 IS CALLING")
  //   console.log(isFirst)

  //   if (isFirst) {
  //     setIsFirst(false)
  //     setResult(12345)

  //     // LOGIC HERE
  //     return () => {
  //       console.log("UNMOUNT useEffect 2")
  //     }
  //   } else {
  //     console.log("Mouted useEffect2")
  //   }

  //   return () => {
  //     console.log("UNMOUNT useEffect 2")
  //   }
  // }, [isFirst, result])
  // console.log(numRef.current)
  // useEffect(() => {
  //   console.log("Mouted 3")
  //   return () => {
  //     console.log("UNMOUNT 3")
  //   }
  // }, [])
  return (

    <div className="flex flex-row w-full">
      {(() => {
        console.log("RENDER UI")
      })(

      )}
      <div className="flex flex-col h-screen text-[50px] w-full">

        {<div className="bg-[#858694] h-fit py-3 leading-[100px] text-white text-[100px] text-right px-5  w-full"
        >{result}</div>}


        <div className="flex flex-row h-full">
          <div className="w-3/4 bg-[#E0E0E0] flex flex-col h-full">
            <div className="w-full grid grid-cols-3 h-4/5">
              <div
                className="h-full w-full flex justify-center items-center border-b border-r border-[#858694] active:opacity-30"
                onClick={handleClick('AC')}
              >AC</div>
              <div
                className="h-full w-full flex justify-center items-center border-b border-r border-[#858694] active:opacity-30"
                onClick={handleClick('POS')}
              >+/-</div>
              <div className="h-full w-full flex justify-center items-center border-b  border-[#858694] active:opacity-30"
                onClick={handleClick('PEC')}
              >%</div>

              {
                number.map(value => (
                  <div key={value} className="h-full w-full flex justify-center items-center border-b border-r border-[#858694] active:opacity-30"
                    onClick={handleClick(value)}>{value}</div>
                ))
              }

            </div>
            <div className="flex flex-row h-1/5">
              <div className="w-2/3 h-full  flex justify-center items-center border-b border-r border-[#858694] active:opacity-30"
                onClick={handleClick('0')}>0</div>
              <div className="w-1/3 h-full  flex justify-center items-center border-b border-[#858694] active:opacity-30"
                onClick={handleClick('DOT')}>.</div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col bg-[#F5923E] text-white">
            <div className="h-full w-full flex justify-center items-center border-b border-[#858694] active:opacity-30"
              onClick={handleClick('DIV')}>÷</div>
            <div className="h-full w-full flex justify-center items-center border-b border-[#858694] active:opacity-30"
              onClick={handleClick('MUP')}>x</div>
            <div className="h-full w-full flex justify-center items-center border-b border-[#858694] active:opacity-30"
              onClick={handleClick('MIN')}>-</div>
            <div className="h-full w-full flex justify-center items-center border-b border-[#858694] active:opacity-30"
              onClick={handleClick('PLUS')}>+</div>
            <div className="h-full w-full flex justify-center items-center border-b border-[#858694] active:opacity-30"
              onClick={handleClick('EUQ')}>=</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[20%] gap-2  relative">
        {memory.map(mem => (
          <div onClick={onClickMemory(mem)} className="p-3 hover:bg-[#858694] cursor-pointer active:bg-[#F5923E]">
            {mem.firstNumber}{' '}{convertSymbol(mem.symbol)}{' '}{mem.secondNumber}{' = '}{mem.result}
          </div>
        ))}
        <div onClick={onClickDeleteMemory} className="absolute bottom-0 right-0 border border-black p-1 cursor-pointer">
          Xóa
        </div>
      </div>
    </div>
  );
}

export default App;
