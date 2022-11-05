import {FC, useState} from 'react'

interface PersonInfo{
    name: string,
    age: number
}

interface Props {
    text: string;
    id: number;
    isVeryNice?: boolean;
    func: (name: string) => string;
    personInfo: PersonInfo;
  }

export const Person: FC<PersonInfo> = ({name, age}) => {

    // Declaramos el tipo de dato de la variable de estado
    const [cash, setCash] = useState<number | null>(1)

    // setCash(null)

  return (
    <div>
        <h2>Hi, my name is {name} and I'm {age} years old</h2>
    </div>
  )
}
