import { fireEvent, render , screen} from "@testing-library/react";
import BodyComponent from "../BodyComponent";
import MOCK_DATA from "../mocks/mockResListData.json";
import {act} from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});


test('should search restaurant List for pizza text input', async () => {
    await act(async() => {
        render(
        <BrowserRouter>
        <BodyComponent />
        </BrowserRouter>
        );
    })
   
   const cardsBeforeSearch =  screen.getAllByTestId("resCard");
   expect(cardsBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole("button" , {name: "Search"});
    const SearchInput = screen.getByTestId("SearchInput");
    fireEvent.change(SearchInput, {target : {value: "pizza"}});//this is like i typed burger in the input box to search for burger
    fireEvent.click(searchBtn);
    //screen should load 1 card with the name burger in it(burger king in our case)

  
   const cardsAfterSearch = screen.getAllByTestId("resCard");
   expect(cardsAfterSearch.length).toBe(2 );
    



 })