import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";



    export const getPosts = createAsyncThunk(
          'posts/getPosts',
          async(thunkApi)=>{
            const res = await fetch('https://portfolio-backend12.herokuapp.com/api/findData').then(
                  (data) =>data.json()
                )
                return res
          }
          
    )

//     export const postPosts = createAsyncThunk(
//           "post/postPosts",
//           async(post)=> await axios.post(`http://localhost:3001/api/insertData`,post)
//     )

export function postPosts(data) {
      return dispatch => {
        return fetch(`https://portfolio-backend12.herokuapp.com/api/insertData`, {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
      };
    }


      const postSlice = createSlice({
          name:'posts',
          initialState:{
            entities: [],
            loading: false,

          },
         reducers:{},
          extraReducers: {
            [getPosts.pending]:(state)=>{
                  state.loading = true
            },
            [getPosts.fulfilled]:(state,action)=>{
                  state.loading = false
                  state.entities = action.payload
            },
            [getPosts.rejected]: (state) => {
                  state.loading = false
                },
            [postPosts.fulfilled]:(state,action)=>{
                  
            }

          },
    })

    export default postSlice.reducer

    
 