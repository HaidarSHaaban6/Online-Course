import { createSlice } from "@reduxjs/toolkit";
import { marque } from "../../data/marquee";

export interface MarqueeCard{
    id:number,
    card:string,
  } ;

interface MarqueeState {
  cards: MarqueeCard[];
}

const initialState: MarqueeState = {
  cards: marque,
};

const marqueeSlice = createSlice({
  name: "marquee",
  initialState,
  reducers: {},
});

export const selectMarqueeCards = (state: { marquee: MarqueeState }) =>
  state.marquee.cards;

export default marqueeSlice.reducer;
