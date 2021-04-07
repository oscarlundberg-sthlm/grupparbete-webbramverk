import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ReturnDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
 
    input {
        width: 400px;
        height: 38px;
        border-radius: 5px;
        padding: 10px 15px;
        border: 1px solid grey;
    }
    textarea {
        width: 400px;
        height: 100px;
        border-radius: 5px;
        padding: 10px 15px;
        border: 1px solid grey;
    }
    select {
        width: 400px;
        height: 38px;
        border-radius: 5px;
        padding: 5px 15px;
        border: 1px solid grey;
    }
    label {
        font-size: 18px;
    }
    button {
        width: 400px;
        height: 38px;
    }
    .backButton {
        width: 70px;
        height: 30px;
        border-color: grey;
        margin: 10px 0px; 
    }
`