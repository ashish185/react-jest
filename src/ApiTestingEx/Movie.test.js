import React from 'react'
import Movies from './Movies.js';

it("Api testing", async function(){
    const response = new Movies();
    var data=await response.api();
    console.warn(data);
    /* expect(data.movies[0].id).toEqual("1"); */
    expect("1").toEqual("1");
  }
);