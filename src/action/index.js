export default function movieList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:"Avengers"},
            {id:2,name:"Jurassic World"},
            {id:3,name:"Dead pool 2"}
        ]
    }
}