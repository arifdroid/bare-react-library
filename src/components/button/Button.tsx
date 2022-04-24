import React, { useState } from 'react';

const Button = (props: any) => {

    const [data, setData] = useState('')

    return <button {...props}></button>
}

export default Button;