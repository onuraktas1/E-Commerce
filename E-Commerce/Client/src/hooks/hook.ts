﻿import type {AppDispatch, RootState} from "../store/store.ts";
import {useDispatch, useSelector} from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
