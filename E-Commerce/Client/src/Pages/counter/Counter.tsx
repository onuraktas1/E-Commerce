import {ButtonGroup, Typography} from "@mui/material";
import {decrement, increment, incrementByAmount} from "./counterSlice.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/hook.ts";

export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <Typography>{count}</Typography>
            <ButtonGroup>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button>
            </ButtonGroup>
        </>
    )
}